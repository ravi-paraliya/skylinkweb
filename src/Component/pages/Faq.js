import React, { useState } from 'react';
import { Box, Container, Typography, Breadcrumbs, Link, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import aboutusbody from '../../imges/aboutus/aboutusbody.jpg';

function Faq() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Array of FAQ questions and answers
    const faqData = [
        {
            question: "What is your company philosophy?",
            answer: "An Interior Designer is a trained professional who creates and designs interior spaces which are aesthetically attractive and functional.An Interior Decorator, on the other hand, views interior design with a largely cosmetic approach using decorative elements to merely rearrange existing spaces."
        },
        {
            question: "What did you do to make it a success?",
            answer: "An Interior Designer is a trained professional who creates and designs interior spaces which are aesthetically attractive and functional.An Interior Decorator, on the other hand, views interior design with a largely cosmetic approach using decorative elements to merely rearrange existing spaces."
        },
        {
            question: "How do you ensure that a project starts off properly?",
            answer: "An Interior Designer is a trained professional who creates and designs interior spaces which are aesthetically attractive and functional.An Interior Decorator, on the other hand, views interior design with a largely cosmetic approach using decorative elements to merely rearrange existing spaces."
        },
        {
            question: "How do you balance function with aesthetic appeal?",
            answer: "An Interior Designer is a trained professional who creates and designs interior spaces which are aesthetically attractive and functional.An Interior Decorator, on the other hand, views interior design with a largely cosmetic approach using decorative elements to merely rearrange existing spaces."
        },
        {
            question: "Mention of other top skills and projects?",
            answer: "An Interior Designer is a trained professional who creates and designs interior spaces which are aesthetically attractive and functional.An Interior Decorator, on the other hand, views interior design with a largely cosmetic approach using decorative elements to merely rearrange existing spaces."
        },
        {
            question: "Capitalize on low hanging fruit to identify.",
            answer: "An Interior Designer is a trained professional who creates and designs interior spaces which are aesthetically attractive and functional.An Interior Decorator, on the other hand, views interior design with a largely cosmetic approach using decorative elements to merely rearrange existing spaces."
        },
        {
            question: "Nanotechnology immersion along the information highway will close the loop on focusing.",
            answer: "An Interior Designer is a trained professional who creates and designs interior spaces which are aesthetically attractive and functional.An Interior Decorator, on the other hand, views interior design with a largely cosmetic approach using decorative elements to merely rearrange existing spaces."
        },
        {
            question: "Ballpark value added activity to beta test.",
            answer: "An Interior Designer is a trained professional who creates and designs interior spaces which are aesthetically attractive and functional.An Interior Decorator, on the other hand, views interior design with a largely cosmetic approach using decorative elements to merely rearrange existing spaces."
        },
        {
            question: "Override the digital divide with additional.",
            answer: "An Interior Designer is a trained professional who creates and designs interior spaces which are aesthetically attractive and functional.An Interior Decorator, on the other hand, views interior design with a largely cosmetic approach using decorative elements to merely rearrange existing spaces."
        },
    ];

    return (
        <Box>
            <Box sx={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${aboutusbody})`,
                display: "flex", justifyContent: "center", alignItems: "center",
                backgroundSize: "cover", height: "250px", width: "100%", backgroundPosition: "center"
            }}>
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography sx={{
                            color: "white", fontWeight: "600", fontSize: "30px",
                            fontFamily: 'Poppins, sans-serif', display: "flex", alignItems: "center",
                        }}> FAQ </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: "20px", alignItems: "center" }}>
                        <HouseIcon sx={{ color: "#E3951B", fontSize: "22px", marginRight: "5px" }} />
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" sx={{ color: "white", fontWeight: "600" }} href="/"></Link>
                            <Typography sx={{ color: '#DDE4FF', fontFamily: 'Rubik, sans-serif' }}> FAQ</Typography>
                        </Breadcrumbs>
                    </Box>
                </Box>
            </Box>

            <Container maxWidth="md">
                <Box sx={{ mt: { xs: "20px", sm: "40px", md: "60px", lg: "90px" } }}>
                    <Typography sx={{
                        display: 'flex', justifyContent: 'center', fontSize: { xs: '24px', md: '30px' },
                        fontFamily: 'Poppins, sans-serif', fontWeight: '600', textAlign: 'center', px: 2,
                    }}> Frequently Asked Questions </Typography>
                </Box>
                <Box>
                    {faqData.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index + 1}`}
                            onChange={handleChange(`panel${index + 1}`)}
                            sx={{
                                boxShadow: 'none', borderBottom: '1px solid #E2E2E2',
                                pb: expanded === `panel${index + 1}` ? '20px' : '0px', pt: "20px"
                            }}>
                            <AccordionSummary
                                aria-controls={`panel${index + 1}bh-content`}
                                id={`panel${index + 1}bh-header`}
                                sx={{
                                    display: 'flex', flexDirection: 'row', alignItems: 'center', border: 'none', padding: 0,
                                }}>
                                {expanded === `panel${index + 1}` ? (
                                    <ArrowDownwardSharpIcon sx={{ marginRight: 1 }} />
                                ) : (
                                    <ArrowForwardSharpIcon sx={{ marginRight: 1, color: 'orange' }} />
                                )}
                                <Typography sx={{
                                    width: '80%', flexShrink: 0, fontWeight: '500',
                                    pl: '30px', fontSize: { xs: '18px', md: '20px' },
                                    fontFamily: 'Montserrat, sans-serif', flexWrap: 'wrap',
                                }}>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                pl: { xs: '20px', md: '60px' }, fontFamily: 'Rubik, sans-serif',
                                fontSize: '17px', lineHeight: '28px', border: 'none', padding: 0, overflow: 'visible',
                            }}>
                                <Typography sx={{
                                    fontSize: '18px', lineHeight: '28px', fontFamily: 'Rubik, sans-serif',color:"#7F7F7F",
                                    pl: { xs: "40px", lg: "0px", sm: "40px", md: "0px" }
                                }}>{item.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default Faq;
