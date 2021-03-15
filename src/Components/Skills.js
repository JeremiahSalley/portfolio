import React from 'react'


const skillSet = ['Html','Css', 'JavaScript', 'React','Node.js','Express.js', 'MySql','Python','Django']

function Skills() {
    return (
        <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
                {skillSet.map((value)=>{
                    return <li>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default Skills
