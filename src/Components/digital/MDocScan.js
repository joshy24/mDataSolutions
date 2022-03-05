import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import digital from "../../images/digital.png";

const MDocScan = () => {
    useEffect(() => {
        sal();
    }, []);

    return (
        <div className="mDocScanMainHolder">
            <div className="breadcrumb-banner single-breadcrumb">
                <div className="container">
                    <div className="mDocTop">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="mTopLeftContent">
                                    <h1>Make your records <span>digital and searchable with MDocScan</span></h1>
                                    <Link to="/MDocScan"><button className="mDocGetStartedBtn">Get Started</button></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="mTopRightContent">
                                    <img src="assets/media/banner/top_frame.png" alt="Line"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="shape shape-3 mDataDocShape"
                    >
                        <img src="assets/media/banner/mDataBackground.png" alt="Line" />
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="mDocSpaceWider mDocLower">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img src="assets/media/banner/mdocscanbg.png" alt="Line" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="mDocScanLowerRightContent">
                                    <h3>MDocScan</h3>
                                    <ul>
                                        <li>MDocScan is a robust EDMS solution that’s designed to convert an organization’s paper records and documents to searchable digital files, and then storing them on the cloud.</li>
                                        <li>MDocScan helps to convert your paper records and documents to digital files and are stored either on physical drives or on the cloud for easier access from anywhere at anytime.</li>
                                        <li>It involves sorting of documents, scanning & indexing of paper documents and then integration of the indexed documents on the cloud platform where they can be accessed anytime, anywhere.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mDocScanMiddle">
                <div className="mDocScanMiddleTopPath">

                </div>
                <div className="mDocScanMiddleContent"> 
                    <div className="container">
                        <div className="mDocSpace mDocMiddle">
                            <h1>Why You Should Go</h1>
                            <h2>Digital</h2>
                            
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="whyDigitalItem">
                                        
                                        <div className="iconArea">
                                            <img src="assets/media/banner/icons/icon1.png" alt="Line" />
                                        </div>
                                        
                                        <div className="whyDigitalItemText">
                                            <h2>Saves costs, time and space</h2>
                                            <h4>Paper records are expensive to manage and they take a lot of time to access, they also take a lot of space. Digital files are accessed in seconds and can be stored electronically</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="whyDigitalItem">
                                        
                                        <div className="iconArea">
                                            <img src="assets/media/banner/icons/icon2.png" alt="Line" />
                                        </div>
                                        
                                        <div className="whyDigitalItemText">
                                            <h2>Multiple Users can access documents at the same time</h2>
                                            <h4>Paper documents can only be accessed by one user per time</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="whyDigitalItem">
                                        
                                        <div className="iconArea">
                                            <img src="assets/media/banner/icons/icon3.png" alt="Line" />
                                        </div>
                                        
                                        <div className="whyDigitalItemText">
                                            <h2>Improves Efficiency</h2>
                                            <h4>Converting paper records and documents to digital files improves the overall efficiency of the organization.</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="whyDigitalItem">
                                        
                                        <div className="iconArea">
                                            <img src="assets/media/banner/icons/icon4.png" alt="Line" />
                                        </div>

                                        <div className="whyDigitalItemText">
                                            <h2>Secure Access and User Accountability</h2>
                                            <h4></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="whyDigitalItem">
                                        
                                        <div className="iconArea">
                                            <img src="assets/media/banner/icons/icon5.png" alt="Line" />
                                        </div>
                                        
                                        <div className="whyDigitalItemText">
                                            <h2>Remote Access</h2>
                                            <h4>Digital files can be accessed from anywhere</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="whyDigitalItem">
                                        
                                        <div className="iconArea">
                                            <img src="assets/media/banner/icons/icon6.png" alt="Line" />
                                        </div>
                                        
                                        <div className="whyDigitalItemText">
                                            <h2>Durability of Records</h2>
                                            <h4>Paper is easily lost and damaged. It corrodes over time</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             
                        </div>
                    </div>
                </div>
                <div className="mDocScanMiddleBottomPath">

                </div>
            </div>
            
            
            <div className="mDocScanProcess mDocScanProcessSpace">
                <div className="mDocScanProcessTextDiv">
                    <img src="assets/media/banner/small_vector.png" alt="Line" />
                    <h1>Our <span >Process</span></h1>
                </div>

                <div className="process_flow">
                    <img src="assets/media/banner/process_flow.png" alt="Line" />
                </div>

                <div className="process_flow_mobile">
                    <img src="assets/media/banner/process_flow_mobile.png" alt="Line" />
                </div>
            </div>

            <div className="mDocScanUseCases mDocSpaceSlimmer">
                <div className="mDocScanProcessTextDiv">
                    <img src="assets/media/banner/small_vector_one.png" alt="Line" />
                    <h1>Use <span >Cases</span></h1>
                </div>

                <div className="useCases">
                    <div className="useCase caseOne">
                        <h2>Law Firms</h2>
                    </div>

                    <div className="useCase caseTwo">
                        <h2>Government Agencies</h2>
                    </div>

                    <div className="useCase caseThree">
                        <h2>Schools</h2>
                    </div>

                    <div className="useCase caseFour">
                        <h2>Non-Governmental Agencies(NGO)</h2>
                    </div>

                    <div className="useCase caseFive">
                        <h2>Insurance Companies</h2>
                    </div>

                    <div className="useCase caseSix">
                        <h2>Banks & Other Finance Institutions</h2>
                    </div>
                </div>

                <div className="mDocScanRapidDigitization">
                    <h1>Rapid Digitization for</h1>
                    <h1><span>Law Firms</span></h1>

                    <div className="mDocScanRapidDigitizationText">
                        <h4>In the legal services industry, proﬁtability can depend upon efective information management.  Law Firms and Legal Counsels spend most of their me researching records, preparing court documents, managing case information and ensuring regulatory compliance.</h4>
                    </div>
                </div>

                <div className="useCasesBackground">

                </div>

            </div>

            <div className="mDocScanCaseAgainstPaper mDocSpace">
                <div className="caseAgainstPaper">
                    <img src="assets/media/banner/rapid_background.png" alt="Line"/>

                    <div className="caseText">
                        <h1><span>Are you losing the case against paper?</span></h1>
                        <ul>
                            <li>Are your ﬁles in ﬁle cabinets or an open ﬁle system? Are they in a secure room?</li>
                            <li>Do you want to expedite your litigation and discovery?</li>
                            <li>Did you know your employees spend 50% of their me searching for ﬁles?</li>
                            <li>Do you have old case ﬁles taking up valuable space?</li>
                            <li>Did you know that moving to a digital document management solution is cheaper than oﬀ– site storage?</li>
                            <li>Can you aﬀord to lose your ﬁles?</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mDocScanColumns mDocSpaceColumn">
                
                <div className="columnHolder">
                    <div className="column-left">
                        <div className="lightGreenArea colorArea">
                            <h4><span>Rapid Digitization for Law Firms</span> is a solution designed for Law Firms by Mdata Solutions to quickly convert paper records and documents into digital Files. This solution helps Law Firms to go from Paper to Digital in a week.</h4>
                        </div>
                        <div className="lightOrangeArea colorArea">
                            <h4><span>MDocScan can enable law ﬁrms to:</span></h4>

                            <ul>
                                <li>Manage information electronically to improve eﬃciency.</li>
                                <li>Reduce scanning and printing costs by 50%</li>
                                <li>Reduce operational costs by 50%</li>
                                <li>Enhance control and protect the integrity of information and evidence</li>
                                <li>Save money by reducing costs and enhancing proﬁtability</li>
                                <li>Create backup and security for documents</li>
                            </ul>
                        </div>
                    </div>

                    <div className="column-right">
                        <div className="lightPurpleArea colorArea">
                            <h4><span>Create Efﬁciency with Electronic Documents</span></h4>

                            <ul>
                                <li>Create full-text searchable PDF ﬁles that allow you to quickly pinpoint case information.</li>
                                <li>Capture and release all electronic documents to a wide variety of applications for greater eﬃciency</li>
                                <li>Number and reference electronic documents using your existing naming conventions, so less training is needed for the upgraded system</li>
                                <li>Maintain a record for every document operation a user performs using enhanced auditing.</li>
                                <li>Use multiple security levels to limit information access and to control a user’s ability to view sensitive information and edit case documents</li>
                                <li>Save private client ﬁles and contracts in an easily accessible digital records system that provides security.</li>
                            </ul>   
                        </div>
                    </div>
                </div>

                <Link to="/contact"><button className="mDocGetStartedBtn">Get Started</button></Link>
            </div>
            
        </div>
    )
}
export default MDocScan;
