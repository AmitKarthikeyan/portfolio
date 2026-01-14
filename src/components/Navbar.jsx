import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    
    const navItems = [
        { name: 'About', href: '#hero' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => ({
                id: item.href.substring(1),
                element: document.querySelector(item.href)
            }));

            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element && section.element.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    const handleClick = (e, href) => {
        e.preventDefault();
        gsap.to(window, {
            duration: 0.3,
            scrollTo: { y: href, offsetY: 80 },
            ease: "power2.out"
        });
    };

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#000000]/20'>
            <div className='container mx-auto flex justify-between items-center md:px-16 px-8 py-5'>
                <a 
                    href='#hero' 
                    onClick={(e) => handleClick(e, '#hero')}
                    className='text-2xl font-bold text-[#000000] hover:text-[#4B9CD3] transition-colors'
                >
                    AK
                </a>
                
                <ul className='flex gap-8 items-center'>
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <li key={item.name}>
                                <a 
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href)}
                                    className={`font-medium transition-colors md:text-base text-sm cursor-pointer ${
                                        isActive 
                                            ? 'text-[#4B9CD3] font-bold' 
                                            : 'text-[#000000] hover:text-[#4B9CD3]'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
