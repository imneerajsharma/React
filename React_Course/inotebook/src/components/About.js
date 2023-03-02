import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container">
                <h2 className="title">About Us</h2>
                <div className="content">
                    <p>Welcome to iNotebook, the perfect solution for those who want to keep their notes safe and easily accessible from anywhere in the world.
                    Our cloud-based platform allows you to securely store all your notes and access them anytime, anywhere, on any device.</p>

                    <p>Our mission is to simplify the way you take and manage notes. 
                    With iNotebook, you don't have to worry about losing your important notes or forgetting important details.
                    You can organize your notes in different categories, add tags and labels, 
                    and easily search for any note using our advanced search functionality.</p>

                    <p>iNotebook is designed to be user-friendly and intuitive, so you can get started right away. 
                    You can create new notes in just a few clicks, and our rich text editor allows you to format your notes as you like, add images, tables, and more. 
                    You can also set reminders for important notes, so you never forget a deadline or an appointment again. </p>

                    <p>At iNotebook, we take security very seriously. 
                    All your notes are encrypted using industry-standard encryption protocols and stored in highly secure data centers. 
                    You can be sure that your notes are safe and that nobody else can access them without your permission. </p>

                    <p>iNotebook is not just a note-taking app; it's a productivity tool that helps you stay organized, focused, and efficient. 
                    With iNotebook, you can take your notes to the next level and achieve your goals faster. </p>
                    
                    <p>Thank you for choosing iNotebook. 
                    We are committed to providing you with the best note-taking experience possible, and we welcome your feedback and suggestions.</p>
                </div>
            </div>

            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .title {
                    font-size: 36px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .content {
                    font-size: 18px;
                    line-height: 1.5;
                    text-align: justify;
                }
                p {
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
};

export default About;
