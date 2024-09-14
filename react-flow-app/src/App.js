import { Controls, ReactFlow, addEdge, useEdgesState, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { addDoc, collection, doc, onSnapshot, query, updateDoc } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import { db } from './firebase';

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const nodesQuery = query(collection(db, 'nodes'));
    const edgesQuery = query(collection(db, 'edges'));

    const unsubscribeNodes = onSnapshot(nodesQuery, (snapshot) => {
      const nodesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNodes(nodesData);
      setLoading(false);
    });

    const unsubscribeEdges = onSnapshot(edgesQuery, (snapshot) => {
      const edgesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEdges(edgesData);
    });

    return () => {
      unsubscribeNodes();
      unsubscribeEdges();
    };
  }, [setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds));
      addDoc(collection(db, 'edges'), {
        source: params.source,
        target: params.target
      });
    },
    [setEdges]
  );

  const onNodeDragStop = useCallback((event, node) => {
    const nodeRef = doc(db, 'nodes', node.id);
    updateDoc(nodeRef, { position: node.position });
  }, []);

  const addNode = useCallback(() => {
    const newNode = {
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      data: { label: `Node ${nodes.length + 1}` }
    };
    addDoc(collection(db, 'nodes'), newNode);
  }, [nodes.length]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
      >
        <Controls />
        <div style={{ position: 'absolute', left: 10, top: 10, zIndex: 4 }}>
          <button onClick={addNode}>Add Node</button>
        </div>
      </ReactFlow>
    </div>
  );
}
