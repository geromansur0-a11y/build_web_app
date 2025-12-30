import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" style={{ 
      background: '#1a1a1a', 
      color: 'white',
      padding: '60px 0 30px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: '700',
              marginBottom: '20px'
            }}>
              Hostinger Horizons
            </div>
            <p style={{ opacity: 0.7 }}>
              Building the future of web development, one pixel at a time.
            </p>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '20px' }}>Product</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', opacity: 0.7 }}>Features</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', opacity: 0.7 }}>Pricing</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', opacity: 0.7 }}>API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '20px' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', opacity: 0.7 }}>About</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', opacity: 0.7 }}>Blog</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', opacity: 0.7 }}>Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '20px' }}>Contact</h3>
            <p style={{ opacity: 0.7, marginBottom: '10px' }}>
              support@hostinger-horizons.com
            </p>
            <p style={{ opacity: 0.7 }}>
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '30px',
          textAlign: 'center',
          opacity: 0.7
        }}>
          <p>
            © {new Date().getFullYear()} Hostinger Horizons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
