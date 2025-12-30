import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Hostinger Horizons transformed how we build websites. The visual editor saved us hundreds of hours!',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Design Director',
      content: 'The AI suggestions are incredibly smart. It feels like having a design partner who never sleeps.',
      avatar: '👨‍🎨'
    },
    {
      name: 'Emma Wilson',
      role: 'E-commerce Entrepreneur',
      content: 'From idea to launch in 3 days. The one-click deployment is a game-changer for small businesses.',
      avatar: '👩‍💻'
    }
  ]

  return (
    <section id="testimonials" className="section" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 
          data-edit-id="testimonials-title"
          style={{ 
            textAlign: 'center', 
            fontSize: '36px', 
            marginBottom: '60px' 
          }}
        >
          What Our Users Say
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              data-edit-id={`testimonial-${index}`}
              style={{
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>
                {testimonial.avatar}
              </div>
              <p style={{ 
                fontStyle: 'italic', 
                marginBottom: '20px',
                fontSize: '18px',
                lineHeight: '1.6'
              }}>
                "{testimonial.content}"
              </p>
              <div>
                <div style={{ fontWeight: '600' }}>{testimonial.name}</div>
                <div style={{ color: '#666' }}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
