import React from 'react'

const EditModeIndicator = ({ editMode, selectionMode }) => {
  if (!editMode && !selectionMode) return null

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: editMode ? '#357DF9' : '#7B68EE',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '500',
      zIndex: 10000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      {editMode ? 'Edit Mode Active' : 'Selection Mode Active'}
      <div style={{ fontSize: '12px', opacity: 0.8 }}>
        Click on elements to edit/select
      </div>
    </div>
  )
}

export default EditModeIndicator
