import React from 'react'

const Header = () => {
  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0'
        }}>
          <div 
            data-edit-id="logo"
            style={{ 
              fontSize: '24px', 
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Hostinger Horizons
          </div>
          
          <div style={{ display: 'flex', gap: '30px' }}>
            <a 
              href="#features" 
              data-edit-id="nav-features"
              style={{ 
                textDecoration: 'none', 
                color: '#333', 
                fontWeight: '500',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#667eea'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              data-edit-id="nav-testimonials"
              style={{ 
                textDecoration: 'none', 
                color: '#333', 
                fontWeight: '500',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#667eea'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              data-edit-id="nav-contact"
              style={{ 
                textDecoration: 'none', 
                color: '#333', 
                fontWeight: '500',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#667eea'}
              onMouseLeave={(e) => e.target.style.color = '#333'}
            >
              Contact
            </a>
          </div>
          
          <button className="btn" data-edit-id="header-cta">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
