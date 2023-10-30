import { useEffect, useState } from 'react';
import Skills from '../../components/Skills';
import { getSkills } from '../../utils/data';
import './style.css';

export default function Resume() {
    const onButtonClick = () => {
        const pdfUrl = "/Kris Kurzawa Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "KrisKurzawaResume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [skills, setSkills] = useState([]);

    const fetchData = async () => {
        const skills = await getSkills();
        setSkills(skills);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>

            <div className="resume">
                <h2 className="page-header">Resume</h2>
                <button className='downloadButton' onClick={onButtonClick}>
                    Download PDF
                </button>
                <h2>Technical Skills</h2>
                <div className='skill-container'>
                    {skills.map((skill) => (
                        <Skills key={skill.id} skill={skill}>
                        </Skills>
                    ))}
                </div>
            </div>
        </>
    )
}