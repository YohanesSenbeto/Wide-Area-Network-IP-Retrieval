import React from "react";
import "./BlogPage.css";

const BlogPage = () => {
    return (
        <div className="blog-page">
            <header className="header">
                <div className="container">
                    <h1 className="title">
                        DESIGN AND DEVELOPMENT OF WEBSITE FOR ETHIOPIAN WIDE
                        AREA NETWORK INTERNET PROTOCOL (WAN-IP)
                    </h1>
                    <div className="author-info">
                        <img
                            src="/banner.png"
                            alt="Author Avatar"
                            className="author-avatar"
                        />
                        <div className="author-details">
                            <span className="author-name">YOHANES SENBETO</span>
                            <span className="post-date">May 15, 2023</span>
                        </div>
                    </div>
                </div>
            </header>
            <main className="main-content">
                <div className="container">
                    <div className="post-content">
                        <p>
                            This project report provides a detail of what we
                            found out about the design and development of
                            Website for Ethiopian WAN-IP. The content of this
                            report is summarized in various chapters. The big
                            motivation for doing this project is: (i) to the
                            best knowledge of this project team, there is no
                            website for providing WAN-IP, (ii) it is one partial
                            fulfillment for the Bachelor of Science Degree in
                            Computer Science, (iii) the main goal of producing
                            educated human power is to solve several problems
                            which are live within different organizations. Thus,
                            we have tried to put our contribution to solve a
                            problem that Ethio-telecom has regarding to
                            providing WAN
                        </p>
                    </div>
                    <div className="group-members">
                        <h3>Group Members</h3>
                        <ul>
                            <li>YOHANES SENBETO - Full stack developer</li>
                            <li>DESALEGN HULUKA - Members</li>
                            <li>DOI BERHANU - Members</li>
                            <li>HUNDE HARARSA - Members </li>
                        </ul>
                    </div>
                </div>
            </main>

            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
        </div>
    );
};

export default BlogPage;
