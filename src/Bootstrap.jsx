import React from 'react';
import {Container,Row,Col,table,tr,th,td} from 'react-bootstrap'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
function Bootstrap()  {
    return(
       
        <div className="Bootstrap"> 
            <Container>
            <Row mt={3}>
            <Col md={5}>

                <Row>
                    <Col>
                        <h3 class="heading">5 IN 1 STATIC CLING PRINTING SYSTEM</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <b>Produce your own static clings on a thermal printed, computerized, static cling system that neatly prints fade and smear resistant data in bold, black letters and numbers. Use one label for multiple purposes.</b>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>Includes stand alone 5 in 1 unit, keyboard, 1 ribbon, 20 standard programs and easy-to-follow instructions. Additional programs or changes are available for an additional charge.</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3 class="heading">5 in 1 supplies see page 141</h3>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h5 class="heading">Summary of steps for ordering your 5 in 1 printing system:</h5>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <li>1. Choose label size: 2 1/4” x 1 1/2” or 2 5/8” x 1 7/8”</li>
                        <li>2. Choose label style:
                            Generic- fastest delivery time for your new system;
                            Custom Multi-Site Label-can be used for multiple locations and the
                            printer can be programmed for each store’s phone number or location;
                            Full Custom- used for a single location and may include their name,
                            address, phone number and logo.</li>
                        <li>3. Place your order
                            a. If you ordered generic or blank labels, go to Step 5.
                            b. If you ordered custom labels:
                            1. Send high-res artwork;
                            2. Wait for label proof</li>
                        <li>4. Approve label proof</li>
                        <li>5. Receive proof for printer programming</li>
                        <li>6. Approve proof for printer programming</li>
                    </Col>
                </Row>




            </Col>
            <Col md={7}>

                <Row>
                    <Col md={6}>

                        <Row >
                            <Col md={12}>
                                <img class="img-fluid" src="https://goldtouch8.com/wp-content/uploads/2022/10/Untitled-design-48.jpg" alt="" />
                            </Col>
                        </Row>

                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col>
                              <li>Stand alone 5 in 1 unit.</li>
                              <li>• Printer size 7” H x 9”L x 6”W.</li>
                              <li>• Keyboard 1”H x 8”L x 4”W</li>
                              <li>• Includes printer, keyboard, 1
                                ribbon, 20 standard programs
                                and easy-to-follow instructions.</li>
                                <li>• Additional programs or changes
                                    are available for an additional
                                    charge.</li>
                            </Col>
                        </Row>
                    </Col>



                </Row>

                <Row>
                    <Col>
                        <table>
                            <thead className="header">
                                <tr class="first-12">
                                    <th>Quantity</th>
                                    <th>Price</th>
                                   
                                </tr>
                            </thead>
                            <tr className="table-first1">
                                
                                <td>1</td>
                                <td>$545.00</td>
                            </tr>
                            <tr className="table-first1">
                                
                                <td>2</td>
                                <td>$525.00</td>
                            </tr>
                            <tr className="table-first1">
                                
                                <td>5</td>
                                <td>$510.00</td>
                            </tr>
                       </table> 
                    </Col>
                </Row>


                <Row>
                    <Col md={12}>
                        <img class="img-fluid" src="https://goldtouch8.com/wp-content/uploads/2022/10/labels.jpg" alt="" />
                    </Col>

                </Row>





            </Col>
        </Row>

        

       

            </Container>
           </div> 
           
          );
        }
           
   
export default Bootstrap;