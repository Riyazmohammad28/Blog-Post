
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://wallpaperaccess.com/full/1657789.jpg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About This Blog</Typography>
                <Text variant="h5">Welcome to our blog! Here, we share thoughts, stories, and insights on a variety of topics ranging from technology and lifestyle to travel and personal growth.<br />
                    Whether you're looking for inspiration, practical advice, or simply a good read, we aim to provide content that resonates with you.<br />
                    Feel free to explore our articles and connect with us if you'd like to share your thoughts or collaborate.
                </Text>
                <Text variant="h5">
                    Want to stay in touch? You can find us on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/yourgithub" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>,
                    follow us on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/yourinstagram" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>,
                    or send us an email
                    <Link href="mailto:yourblogemail@gmail.com?Subject=Hello" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
};

export default About;
