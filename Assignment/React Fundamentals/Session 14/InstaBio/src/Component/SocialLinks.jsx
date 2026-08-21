import React from 'react';

function SocialLinks({ links, theme = "light" }) {

    const themeClass = theme === "dark"
        ? "bg-dark text-white"
        : "bg-light text-dark";

    return (
        <div className={`p-3 rounded mt-3 ${themeClass}`}>
            <div className="d-flex justify-content-center gap-3">

                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`btn ${
                            theme === "dark"
                                ? "btn-outline-light"
                                : "btn-outline-dark"
                        }`}
                    >
                        {link.name}
                    </a>
                ))}

            </div>
        </div>
    );
}

export default SocialLinks;