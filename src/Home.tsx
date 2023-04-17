// Other imports
import './Home.css';
import * as React from 'react';
import acerLogo from './assets/images/acerLogo.svg';
import acerLogoLight from './assets/images/acerLogoLight.svg';
import homeImageOne from './assets/images/homeImageOne.png';
import mathIcon from './assets/images/mathIcon.svg';
import scienceIcon from './assets/images/scienceIcon.svg';
import readingIcon from './assets/images/readingIcon.svg';
import homeImageTwo from './assets/images/homeImageTwo.png';
import homeImageThree from './assets/images/homeImageThree.png';
import registrationIcon from './assets/images/registrationIcon.svg';
import preparationIcon from './assets/images/preparationIcon.svg';
import administrationIcon from './assets/images/administrationIcon.svg';
import latestImageOne from './assets/images/latestImageOne.png';
import latestImageTwo from './assets/images/latestImageTwo.png';
import latestImageThree from './assets/images/latestImageThree.png';
import latestImageFour from './assets/images/latestImageFour.png';

// Material UI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

function Home() {
  const navItems = ['Overview', 'The Challenge', 'Schools', 'Results'];
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [country, setCountry] = React.useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const changeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const showMessageField = () => {
	let messageField = document.querySelector('.messageField') as HTMLElement;
	if (messageField)
		messageField.style.display = 'block';
	let addMessageText = document.querySelector('.addMessageText') as HTMLElement;
	if (addMessageText)
		addMessageText.style.display = 'none';
  }


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const drawerWidth = 240;
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <div className='Home'>
      <AppBar component='nav'>
        <Toolbar className='navContents'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={acerLogo} className='logo' />
          <p className='logoText'>
            Online Services
            <br />
            Test page
          </p>
          <div className='navItems'>
            {navItems.map((item) => (
              <Button className='navItem' key={item}>
                {item}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <div className='sectionOne'>
        <img className='backgroundImage' src={homeImageOne} />
        <div className='sectionContent'>
          <h1>CHALLENGE YOUR STUDENTS ON THE WORLD STAGE</h1>
          <h2>A test page to demonstrate my skills</h2>
          <h3>
            Motivate top-performing students, assess their progress, and
            celebrate their achievements.
          </h3>
          <button className='learnMoreButton'>Find out more</button>
        </div>
      </div>

      <div className='sectionTwo'>
        <div className='sectionContent'>
          <h1>Available for years 4, 6 and 8</h1>
          <h2>Online & multiple-choice</h2>
		  	<Grid container justifyContent={'center'}>
			  <Grid item xs={2.9}>
				<img src={mathIcon} />
				<p>Mathematics</p>
			</Grid>
			<Grid item xs={2.9}>
				<img src={scienceIcon} />
				<p>Science</p>
			</Grid>
			<Grid item xs={2.9}>
				<img src={readingIcon} />
				<p>Reading</p>
			</Grid>
			</Grid>
        </div>
      </div>

	  <div className='sectionThree' >
	  <img className='backgroundImage' src={homeImageTwo} />
		<div className='gradient' />
        <div className='sectionContent'>
          <h1>Rewarding student achievement  </h1>
          <h2>Medals and certificates are given to exceptional high-achievers to acknowledge their participation and outstanding performance.</h2>

          <button className='criteriaButton'>Certificate and award criteria <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.6875 8.6543C0.6875 9.18164 1.30273 9.44531 1.68359 9.06445L5.43359 5.31445C5.66797 5.08008 5.66797 4.69922 5.43359 4.46484L1.68359 0.714844C1.30273 0.333984 0.6875 0.597656 0.6875 1.125V8.6543Z" fill="white"/>
</svg>
</button>
        </div>
	  </div>

	  <div className='sectionFour'>
	  <div className='gradient' />

	  <img className='backgroundImage' src={homeImageThree} />
        <div className='sectionContent'>
			<h1>The 2023 challenge</h1>
			<h2>Participation in the challenge is open to all registered Australian schools, with students required to be enrolled in a participating school to take part.</h2>
		  	<Grid container justifyContent={'center'}>
				<Grid item xs={3.3}>
					{/* Add a 20px left margin to the registration icon because the pen in it makes it look like its not centered normally*/}
					<img src={registrationIcon} style={{marginLeft: "20px"}} />
					<h3>Registration</h3>
					<p>On the XX of April 2021, registrations for the challenge will become available, with each subject costing XX per student to participate.</p>
				</Grid>
				<Grid item xs={3.3}>
					<img src={preparationIcon} />
					<h3>Preparation</h3>
					<p>After registering, simply add participating students to your ACER account, either new or existing, and allocate the challenge.</p>
				</Grid>
				<Grid item xs={3.3}>
					<img src={administrationIcon} />
					<h3>Administration</h3>
					<p>Using ACER's online assessment and reporting platform, the challenge is administered digitally, with each subject expected to take around XX minutes for students to finish.</p>
				</Grid>
			</Grid>
			<hr/>
			<h1>Competition dates</h1>
			<Grid container justifyContent={'center'} className='secondGrid'>
			  <Grid item xs={2.9}>
				<img src={mathIcon} />
				<h4>Monday, 16 August</h4>
				<p>Mathematics</p>
			</Grid>
			<Grid item xs={2.9}>
				<img src={scienceIcon} />
				<h4>Tuesday, 17 August</h4>
				<p>Science</p>
			</Grid>
			<Grid item xs={2.9}>
				<img src={readingIcon} />
				<h4>Wednesday, 18 August</h4>
				<p>Reading</p>
			</Grid>
			</Grid>
        </div>
      </div>

	  <div className='sectionFive'>
		<div className='sectionContent'>
			<h1>Discover the latest from ACER</h1>
			<Grid container justifyContent={"center"} spacing={4}>
				<Grid item xs={2.4} >
					<Card className='card'>
						<CardActionArea>
							<img src={latestImageOne} alt="green iguana" />
							<CardContent className='cardContent'>
								<Grid container>
									<Grid item xs={6} className='cardDate'>
										<p>9 August 2022</p>
									</Grid>
									<Grid item xs={6} className='cardTag'>
										<p>Higher education</p>
									</Grid>
								</Grid>
							<p className='cardBody'> Investing in teacher development: Building an evidence base in Lao PDR</p>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={2.4} >
				<Card className='card'>
						<CardActionArea>
							<img src={latestImageTwo} alt="green iguana" />
							<CardContent className='cardContent'>
								<Grid container>
									<Grid item xs={6} className='cardDate'>
										<p>9 August 2022</p>
									</Grid>
									<Grid item xs={6} className='cardTag'>
										<p>Higher education</p>
									</Grid>
								</Grid>
							<p className='cardBody'>
							Snapshot of Australian teachers and principals
							</p>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={2.4} >
				<Card className='card'>
						<CardActionArea>
						<img src={latestImageThree} alt="green iguana" />
														<CardContent className='cardContent'>
								<Grid container>
									<Grid item xs={6} className='cardDate'>
										<p>9 August 2022</p>
									</Grid>
									<Grid item xs={6} className='cardTag'>
										<p>Higher education</p>
									</Grid>
								</Grid>
							<p className='cardBody'>
							Building the evidence base for educational quality in the Pacific
							</p>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={2.4} >
				<Card className='card'>
						<CardActionArea>
						<img src={latestImageFour} alt="green iguana" />
							<CardContent className='cardContent'>
								<Grid container>
									<Grid item xs={6} className='cardDate'>
										<p>9 August 2022</p>
									</Grid>
									<Grid item xs={6} className='cardTag'>
										<p>Higher education</p>
									</Grid>
								</Grid>
							<p className='cardBody'>
								A knowledge portal on learning assessments for South Asia
							</p>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</div>
	  </div>
	  
	  <div className='sectionSix'>
		  <div className='sectionContent'>
			<h1>Contact us to find out more</h1>
			<h2>One of our friendly staff members will contact you within 24 hours</h2>
			<Grid container  justifyContent={'center'} spacing={5}>
				<Grid item xs={3}>
					<TextField id="name" label="Full name" variant="outlined" fullWidth sx={{marginBottom:"20px"}}/>
					<TextField id="schoolName" label="School name" variant="outlined" fullWidth/>
				</Grid>
				<Grid item xs={3} >
					<TextField id="email" label="Email" variant="outlined" fullWidth sx={{marginBottom:"20px"}}/>
					<FormControl fullWidth>
					<InputLabel id="countrySelector">Country</InputLabel>
						<Select
							labelId="countrySelector"
							className="countrySelector"
							value={country}
							label="Country"
							onChange={changeCountry}
							fullWidth
						>
							<MenuItem value={'Australia'}>Australia</MenuItem>
							<MenuItem value={'Austria'}>Austria</MenuItem>
							<MenuItem value={'China'}>China</MenuItem>
							<MenuItem value={'India'}>India</MenuItem>
							<MenuItem value={'Japan'}>Japan</MenuItem>
							<MenuItem value={'USA'}>USA</MenuItem>
						</Select>
						</FormControl>
				</Grid>
			</Grid>
			<Grid container justifyContent={'center'}>
				<Grid item xs={5.8} alignContent={'end'}>
				<TextField
					className='messageField'
					label='Message'
					multiline
					rows={4}
					fullWidth
					/>
				<p onClick={showMessageField}className='addMessageText'>Add message (optional)</p>
					<button>Send  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.6875 8.6543C0.6875 9.18164 1.30273 9.44531 1.68359 9.06445L5.43359 5.31445C5.66797 5.08008 5.66797 4.69922 5.43359 4.46484L1.68359 0.714844C1.30273 0.333984 0.6875 0.597656 0.6875 1.125V8.6543Z" fill="white"/></svg></button>
				</Grid>
				
			</Grid>
		  </div>
	  </div>
	  <footer>
		  <img src={acerLogoLight} />
		  <p>© 2023 ACER</p>
	  </footer>
    </div>
  );
}

export default Home;
