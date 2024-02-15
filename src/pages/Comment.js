import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Comment() {
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                {/* Comment Policy */}
                <h1>Comment Policy</h1>

                <p>Welcome to <em>CTE Partnerships</em> – a community dedicated to sharing organizations and work opportunities. We encourage open and constructive discussions to foster a positive and informative environment. To ensure a respectful and engaging experience for everyone, we have established the following comment policy:</p>

                <h2>Guidelines for Comments</h2>

                <ol>
                <li><strong>Be Respectful:</strong> Treat others with kindness and respect. Avoid personal attacks, offensive language, or any form of discrimination.</li>
                <li><strong>Stay on Topic:</strong> Keep your comments relevant to the post or discussion. Off-topic comments may be removed to maintain the focus on organizations and work opportunities.</li>
                <li><strong>No Spam or Self-Promotion:</strong> Do not post promotional content or spam. Contributions should add value to the community rather than serve personal interests.</li>
                <li><strong>Avoid All-Caps:</strong> Writing in all capital letters is considered shouting and can be disruptive. Please use lowercase or sentence case.</li>
                <li><strong>Provide Constructive Feedback:</strong> If you have feedback, make sure it is constructive and helpful. Share your insights to contribute positively to the discussion.</li>
                <li><strong>Respect Privacy:</strong> Refrain from sharing personal information, including contact details, in the comments. Protect your privacy and the privacy of others.</li>
                <li><strong>Moderation Rights:</strong> The site moderators reserve the right to edit or remove comments that violate these guidelines. Persistent violations may result in the user being banned from participating in the community.</li>
                </ol>

                <h2>How to Report Violations</h2>

                <p>If you come across a comment that you believe violates our community guidelines, please report it to the moderators. You can use the reporting feature or contact us directly via <a href="mailto:contact@fblaproject.com">contact@fblaproject.com</a>.</p>

                <p>By participating in our community, you agree to adhere to these guidelines. We appreciate your cooperation in maintaining a positive and supportive space for sharing valuable information about organizations and work opportunities.</p>

                <p>Thank you for being a part of <em>CTE Partnerships</em>!</p>
            </div>
            <Footer />
        </div>
    );
}

export default Comment;