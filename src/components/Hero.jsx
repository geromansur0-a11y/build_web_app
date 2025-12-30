import React from 'react'

const Hero = () => {
  return (
    <section className="section" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 
          data-edit-id="hero-title"
          style={{ 
            fontSize: '48px', 
            marginBottom: '20px',
            lineHeight: '1.2'
          }}
        >
          Build Your Dream Website
          <br />
          with Hostinger Horizons
        </h1>
        
        <p 
          data-edit-id="hero-subtitle"
          style={{ 
            fontSize: '20px', 
            marginBottom: '40px',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}
        >
          The revolutionary visual editor that lets you design, edit, and deploy 
          your website with AI-powered tools and real-time collaboration.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button className="btn" style={{ background: 'white', color: '#667eea' }}>
            Start Free Trial
          </button>
          <button className="btn" style={{ background: 'transparent', border: '2px solid white' }}>
            Watch Demo
          </button>
        </div>
        
        <div style={{ marginTop: '60px' }}>
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Dashboard Preview"
            data-edit-id="hero-image"
            style={{ 
              width: '100%', 
              maxWidth: '900px',
              borderRadius: '15px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              margin: '0 auto'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
