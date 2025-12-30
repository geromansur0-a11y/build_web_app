import React, { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import EditModeIndicator from './components/EditModeIndicator'

function App() {
  const [editMode, setEditMode] = useState(false)
  const [selectionMode, setSelectionMode] = useState(false)

  useEffect(() => {
    // Simulasi pesan dari parent iframe
    const handleMessage = (event) => {
      if (event.data?.type === 'enable-edit-mode') {
        setEditMode(true)
      } else if (event.data?.type === 'disable-edit-mode') {
        setEditMode(false)
      } else if (event.data?.type === 'enableSelectionMode') {
        setSelectionMode(true)
      } else if (event.data?.type === 'disableSelectionMode') {
        setSelectionMode(false)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div 
      id="root"
      data-edit-mode-enabled={editMode ? "true" : "false"}
      data-selection-mode-enabled={selectionMode ? "true" : "false"}
    >
      <EditModeIndicator editMode={editMode} selectionMode={selectionMode} />
      <HomePage />
    </div>
  )
}

export default App
