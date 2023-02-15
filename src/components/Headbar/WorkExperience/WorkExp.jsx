import { Grid } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import './WorkExp.css'
const WorkExp = () => {

    const WorkColumn = (props) => {

        const {number, title, company, date, description, link} = props;
        return(
        <Grid item xs={4} sx={{
            height: '60vh',
            padding: '3rem',
            // display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize:'2.7ch',
        }}>
            <JobDesc>
            <Grid className='number'>{number}.
            </Grid>
            <div className='title fade'>{title} @ <a target="_blank" rel="noreferrer noopener" href={link} className="company-link" id={link !== "" ? 'has-link': 'no-link'}>{company}</a></div>
            <div className='date fade'>{date}</div>
            <div className='description opaq'>{description.map((content, index) => {
                return(
                    <p key={index}>{content}</p>
                )
            })}</div>
            </JobDesc>
        </Grid>
        )
    }

    const [showWorkExp, setShowWorkExp] = useState(false);

    const clickWorkExp = () => {
        setShowWorkExp(!showWorkExp);
    }

    const mountedStyle = { animation: "inAnimation 1000ms ease-in" };
    const unmountedStyle = {
    animation: "outAnimation 1200ms ease-out",
    animationFillMode: "forwards"
    };

    const Item = styled('div') ({
        // color: '#F7F7F7',
        // fontWeight: '600',
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'2.7ch',
        // backgroundColor: '#322F29',
      });

    const JobDesc = styled('div') ({
        height: '90vh',
        padding: '3rem',
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'1.7ch',

    })
    //optimize later
    const chDesc = ['Did some cool stuff with AWS SDK.',
                    'Worked with a team of 4 to build a web-based puzzle game for a HKSTP.',
                    'Reduxjs toolkit was pretty dope for react \'s state management.',]

    const rksDesc = ['My first time doing VueJS', 'Learnt a lot of async await with this one right here!']
    const fsDesc = ['The basics trifecta: HTML, CSS, JS...','And also Git!']
  

    return(
        <div className="transitionDiv" style={showWorkExp ? mountedStyle : unmountedStyle}>
        <>
        {!showWorkExp ? 
        <Grid onClick={clickWorkExp} className='tri-col' id='one' item xs={4}>
        <Item className="tag">Professional Experience</Item>
        </Grid> : 
        <>
        <ClearIcon sx={{float: 'right', marginRight:'1rem', marginTop:'0.5rem'}} onClick={clickWorkExp} className='back-icon'/>
        <Grid container>

        <WorkColumn number= '01' title='Backend Developer' company='Career Hackers' date='Dec 2022 - Present' description={chDesc} link='https://www.careerhackers.io/'/>
        <WorkColumn number= '02' title='Frontend Developer' company='Risksis' date='Jun 2022 - Aug 2022' description={rksDesc} link='https://www.linkedin.com/company/risksis/?originalSubdomain=hk'/>
        <WorkColumn number= '03' title='Software Developer' company='Foresight' date='Jun 2021 - Aug 2021' description={fsDesc} link=''/>
        </Grid>
        </>
        }
            {/* <Item className="tag">Work Experience</Item> */}
        </>
        <Grid className='tri-col' id='two' item xs={4}>
            <Item className="tag">Personal Projects</Item>
        </Grid>
        <Grid className='tri-col' id='three' item xs={4}>
            <Item className="tag">Let's Chat</Item>
        </Grid>
        </div>
    )
}

export default WorkExp;