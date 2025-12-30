import React from 'react'

const Features = () => {
  const features = [
    {
      title: 'AI-Powered Design',
      description: 'Generate stunning designs with AI suggestions based on your content and preferences.',
      icon: '🎨'
    },
    {
      title: 'Real-Time Editing',
      description: 'Edit your website visually with instant preview. No coding required.',
      icon: '⚡'
    },
    {
      title: 'Collaborate Seamlessly',
      description: 'Work with your team in real-time. Share, comment, and approve changes together.',
      icon: '👥'
    },
    {
      title: 'One-Click Deployment',
      description: 'Deploy your website to global CDN with a single click. SSL included.',
      icon: '🚀'
    }
  ]

  return (
    <section id="features" className="section">
      <div className="container">
        <h2 
          data-edit-id="features-title"
          style={{ 
            textAlign: 'center', 
            fontSize: '36px', 
            marginBottom: '60px' 
          }}
        >
          Powerful Features
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              data-edit-id={`feature-${index}`}
              style={{
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>
                {feature.icon}
              </div>
              <h3 style={{ marginBottom: '15px' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#666' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
