import React from 'react'
import Tittle from '../Components/Tittle'
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'PHP Laravel'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'Bootstrap'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'Material UI'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'HTML/CSS'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'Web Design'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'ReactJS'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Python'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'UI/UX Design'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'GIT'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'AWS S3'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'MySQL/PgSQL'} progress={'100%'} width={'100%'} />
            </div>
        </div>
    )
}

export default AboutPage;
