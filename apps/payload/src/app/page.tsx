import Link from 'next/link';

export default function Home() {
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '2rem',
            gap: '2rem',
        }}>
            <div className="glass-card" style={{
                padding: '3rem',
                maxWidth: '600px',
                width: '100%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                }}>
                    P
                </div>

                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    margin: 0,
                    background: 'linear-gradient(to right, #fff, #aaa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Payload CMS
                </h1>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: '#aaa',
                    margin: 0
                }}>
                    This application is running Payload CMS integrated with Saleor.
                    Access the admin dashboard to manage your content.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: '1rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <Link href="/admin" className="glass-button">
                        <span>Access Admin Panel</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>

                    <a href="https://payloadcms.com/docs" target="_blank" rel="noopener noreferrer" className="glass-button" style={{ background: 'transparent' }}>
                        <span>Documentation</span>
                    </a>
                </div>
            </div>

            <footer style={{
                marginTop: 'auto',
                color: '#666',
                fontSize: '0.9rem'
            }}>
                Powered by Saleor & Payload
            </footer>
        </main>
    );
}
