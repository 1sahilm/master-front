import React, { Component, Fragment } from 'react'
import OffCanvas from 'react-aria-offcanvas'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import { fabars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "next/image/";
// import { Accordion,
// AccordionItem,
// AccordionItemHeading,
// AccordionItemButton,
// AccordionItemPanel,
// }
//   from 'react-accessible-accordion';
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

 
const Navigation = () => (
  <nav id="menu">
     <Accordion
                      square
                     
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          // className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/divanbed">Divan Bed</Link>  
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Accordion>
                          <AccordionSummary 
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel7a-content"
                          id="panel7a-header"
                          
                          >
                            <Typography
                          // className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/divanbed">Shop By Type</Link>
                        </Typography>

                          </AccordionSummary>
                          <AccordionDetails>
                        <Typography>
                        <ul>
                          <li>
                          Linen Fabric Divan Beds
                          </li>
                        </ul>
                        </Typography>
                      </AccordionDetails>
                        </Accordion>
                          






                      </AccordionDetails>
                      <Accordion>
                          <AccordionSummary 
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel8a-content"
                          id="panel8a-header"
                          
                          >
                            <Typography
                          // className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/divanbed">Shop By Size</Link>
                        </Typography>

                          </AccordionSummary>
                          <AccordionDetails>
                        <Typography>
                        <ul>
                          <li>
                          Linen Fabric Divan Beds
                          </li>
                        </ul>
                        </Typography>
                      </AccordionDetails>
                        </Accordion>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography
                           
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/allbeds">All Beds</Link>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                          <b>
                            Please note Dilivery times can strat from 5am
                            onwards up to 10pm
                          </b>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <Typography
                          // className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/headboard">Headboard</Link>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem Ipsum is simply dummy text of the Beds Divans
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                      >
                        <Typography
                          // className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/Headboard">Mattresses</Link>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem Ipsum is simply dummy text of the Beds Divans
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                      >
                        <Typography
                          // className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/sofa">Sofa</Link>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem Ipsum is simply dummy text of the Beds Divans
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                      >
                        <Typography
                          // className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/gardenfurniture">Garden Furniture</Link>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem Ipsum is simply dummy text of the Beds Divans
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                      >
                        <Typography
                          // className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/gardenfurniture">Living Room Furniture</Link>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem Ipsum is simply dummy text of the Beds Divans
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                      >
                        <Typography
                          // className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/gardenfurniture">Dining Set</Link>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem Ipsum is simply dummy text of the Beds Divans
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                      >
                        <Typography
                          // className={classes.heading}
                          style={{
                            color: "#00B2BD",
                            fontWeight: "600",
                            fontSize: "18px",
                          }}
                        >
                          <Link href="/product/gardenfurniture">Sale</Link>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem Ipsum is simply dummy text of the Beds Divans
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown
                      </AccordionDetails>
                    </Accordion>
       
    
    {/* <ul>
      <li>
        <Link href="/product/divanbed">Divan Bed</Link>               
       <ul>
          <li>

          </li>
        </ul>
         
      </li>
      <li>
        <Link href="/product/allbeds">All Beds</Link>
      </li>
      <li>
      <Link href="/product/headboard">Headboard</Link>
      </li>
      <li>
      <Link href="/product/Headboard">Mattresses</Link>
      </li>
      <li>
      <Link href="/product/sofa">Sofa</Link>
      </li>
      <li>
      <Link href="/product/gardenfurniture">Garden Furniture</Link>
      </li>
      <li>
      <Link href="/newproduct">Living Room Furniture</Link>
      </li>
      <li>
      <Link href="/product/diningset">Dining Set</Link>
      </li>
      <li>
      <Link href="#">Sale</Link>
      </li>
    </ul> */}
  </nav>
)
 
export default class App extends Component {
  state = {
    isOpen: false,
  }
 
  open = () => {
    this.setState({ isOpen: true })
  }
 
  close = () => {
    this.setState({ isOpen: false })
  }
 
  render() {
    return (
      
      <Fragment>
         
        <button  
          id="menu-button"
          aria-label="Menu"
          aria-controls="menu"
          aria-expanded={this.state.isOpen}
          onClick={this.open}
        >
          <Image src="/assets/images/banner/menu.svg" width={40} height={35} alt="bedsdivans" />
        </button>
        <OffCanvas
          isOpen={this.state.isOpen}
          onClose={this.close}
          labelledby="menu-button"
        >
          <button onClick={this.close}>Close</button>
          <Navigation />
        </OffCanvas>
         
      </Fragment>
      
    )
  }
}