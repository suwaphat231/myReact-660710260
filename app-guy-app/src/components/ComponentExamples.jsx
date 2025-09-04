import React from 'react';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Clock from './Clock';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div
            style={{
                maxWidth: '900px',
                margin: '40px auto',
                padding: '32px',
                fontFamily: 'Segoe UI, Arial, sans-serif',
                background: 'linear-gradient(135deg, #a7f3d0 0%, #38bdf8 100%)',
                borderRadius: '24px',
                boxShadow: '0 8px 32px rgba(56,189,248,0.12), 0 1.5px 4px rgba(16,185,129,0.08)'
            }}
        >
            <h1
                style={{
                    textAlign: 'center',
                    color: '#0ea5e9',
                    marginBottom: '48px',
                    fontWeight: 800,
                    letterSpacing: '2px',
                    fontSize: '2.8rem',
                    textShadow: '0 2px 8px #7dd3fc55'
                }}
            >
                Welcome
            </h1>

            <section
                style={{
                    marginBottom: '36px',
                    padding: '28px',
                    border: 'none',
                    borderRadius: '16px',
                    background: 'linear-gradient(120deg, #e0f2fe 60%, #bae6fd 100%)',
                    boxShadow: '0 2px 8px #bae6fd33'
                }}
            >
                <h2 style={{ color: '#0ea5e9', marginBottom: '18px', fontWeight: 700 }}>
                    Welcome to my blog
                </h2>
                <Welcome />
                <Greeting />
            </section>

            <section
                style={{
                    marginBottom: '36px',
                    padding: '28px',
                    border: 'none',
                    borderRadius: '16px',
                    background: 'linear-gradient(120deg, #ccfbf1 60%, #67e8f9 100%)',
                    boxShadow: '0 2px 8px #67e8f933'
                }}
            >
                <h2 style={{ color: '#06b6d4', marginBottom: '18px', fontWeight: 700 }}>
                    Time
                </h2>
                <Clock />
            </section>

            <section
                style={{
                    marginBottom: '36px',
                    padding: '28px',
                    border: 'none',
                    borderRadius: '16px',
                    background: 'linear-gradient(120deg, #dbeafe 60%, #38bdf8 100%)',
                    boxShadow: '0 2px 8px #38bdf833'
                }}
            >
                <h2 style={{ color: '#2563eb', marginBottom: '18px', fontWeight: 700 }}>
                    MEEEE
                </h2>
                <UserCard />
            </section>

            <section
                style={{
                    marginBottom: '36px',
                    padding: '28px',
                    border: 'none',
                    borderRadius: '16px',
                    background: 'linear-gradient(120deg, #f0fdfa 60%, #a7f3d0 100%)',
                    boxShadow: '0 2px 8px #a7f3d033'
                }}
            >
                <h2 style={{ color: '#14b8a6', marginBottom: '18px', fontWeight: 700 }}>
                    Todo List
                </h2>
                <TodoList />
            </section>
        </div>
    );
}
export default ComponentExamples;