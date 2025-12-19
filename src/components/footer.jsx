import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Footer = () => {
    useGSAP(() => {
        const titleSplits = SplitText.create("#footer h2", { type: "words" });

        const footerTL = gsap.timeline({
            scrollTrigger: {
                trigger: "#footer",
                start: "top center",
            },
            ease: "power1.inOut",
        });

        footerTL
            .from(titleSplits.words, {
                opacity: 0,
                yPercent: 100,
                stagger: 0.02,
            })
            .from("#footer h3, #footer p", {
                opacity: 0,
                yPercent: 100,
                stagger: 0.02,
            })
            .to("#f-right-leaf", {
                y: "-50",
                duration: 1,
                ease: "power1.inOut",
            })
            .to("#f-left-leaf", {
                y: "50",
                duration: 1,
                ease: "power1.inOut",
            });
    });

    return (
        <footer id="footer">
            <img src="/images/footer-left-leaf.png" alt="leaf left" id="f-left-leaf" />
            <img src="/images/footer-right-leaf.png" alt="leaf right" id="f-right-leaf" />

            <div className="content">
                <h2>Where to Find Us</h2>

                <div>
                    <h3>Visit Our Store</h3>
                    <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>hello@jsmcocktail.com</p>
                    <p>(555) 987-6543</p>
                </div>

                <div>
                    <h3>Open Everyday</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                target="_blank"
                                key={social.name}
                                href={social.url}
                                area-label={social.name}
                                rel="noopener noreferrer"
                            >
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
