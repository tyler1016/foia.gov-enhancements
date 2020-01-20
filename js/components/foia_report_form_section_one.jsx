import React, { Component } from 'react';
import FoiaTooltip from './foia_tooltip';

/**
 * README!: The assumption of this file is that it is a 'good enough'
 * holding place for the section two markup at the moment.  This should all be updated
 * as we break the markup into better components.
 */

class FoiaReportFormSectionOne extends React.Component {
     render () {
       return (
         <div>
           <div className="form-group">
             <fieldset>
        <legend className="foia-header-blue-line--h2">
         1. Select an Agency or Component.
         <FoiaTooltip text="Select the type of FOIA data you would like to view. The data comes from agencies' Annual FOIA Reports. To learn more about the data, view the terms in the Glossary." />
        </legend>
        <div className="form-group field">
          <lable htmlFor="data_type"><b>Agency Name</b></lable>
          <select name="data_type" id="data_type" className="usa-reset-width">
           <option value size={30} disabled>Select an Agency:</option>
           <option value="ALL">All Agencies</option>
           <option value="USDA">Department of Agriculture</option>
           <option value="DOC">Department of Commerce</option>
           <option value="DoD">Department of Defense</option>
           <option value="ED">Department of Education</option>
           <option value="DOE">Department of Energy</option>
           <option value="HHS">Department of Health and Human Services</option>
           <option value="DHS">Department of Homeland Security</option>
           <option value="HUD">Department of Housing and Urban Development</option>
           <option value="DOI">Department of the Interior</option>
           <option value="DOJ">Department of Justice</option>
           <option value="U.S. DOL">Department of Labor</option>
           <option value="State">Department of State</option>
           <option value="DOT">Department of Transportation</option>
           <option value="Treasury">Department of the Treasury</option>
           <option value="VA">Department of Veterans Affairs</option>
           <option value="ACUS">Administrative Conference of the United States</option>
           <option value="ACHP">Advisory Council on Historic Preservation</option>
           <option value="USAID">U.S. Agency for International Development</option>
           <option value="ABMC">American Battle Monuments Commission</option>
           <option value="NRPC">National Railroad Passenger Corporation (Amtrak)</option>
           <option value="AFRH">Armed Forces Retirement Home</option>
           <option value="USAGM">U.S. Agency for Global Media</option>
           <option value="ASC">Appraisal Subcommittee</option>
           <option value="CIA">Central Intelligence Agency</option>
           <option value="CSB">Chemical Safety and Hazard Investigation Board</option>
           <option value="USCCR">U.S. Commission on Civil Rights</option>
           <option value="CFA">Commission on Fine Arts</option>
           <option value="CPPBSD">Committee for Purchase from People Who Are Blind or &amp;#8230</option>
           <option value="CFTC">Commodity Futures Trading Commission</option>
           <option value="CFPB">Consumer Financial Protection Bureau</option>
           <option value="U.S. CPSC">U.S. Consumer Product Safety Commission</option>
           <option value="CNCS">Corporation for National and Community Service</option>
           <option value="CIGIE">Council of Inspectors General on Integrity and Efficiency</option>
           <option value="CSOSA">Court Services and Offender Supervision Agency</option>
           <option value="DNFSB">Defense Nuclear Facilities Safety Board</option>
           <option value="DC">Denali Commission</option>
           <option value="EPA">Environmental Protection Agency</option>
           <option value="EEOC">Equal Employment Opportunity Commission</option>
           <option value="CEQ">Council on Environmental Quality</option>
           <option value="OMB">Office of Management and Budget</option>
           <option value="ONDCP">Office of National Drug Control Policy</option>
           <option value="OSTP">Office of Science and Technology Policy</option>
           <option value="USTR">Office of the United States Trade Representative</option>
           <option value="Ex-Im Bank">Export-Import Bank of the U.S.</option>
           <option value="FCA">Farm Credit Administration</option>
           <option value="FCSIC">Farm Credit System Insurance Corporation</option>
           <option value="FCC">Federal Communications Commission</option>
           <option value="FDIC">Federal Deposit Insurance Corporation</option>
           <option value="FEC">Federal Election Commission</option>
           <option value="FERC">Federal Energy Regulatory Commission</option>
           <option value="FFIEC">Federal Financial Institutions Council</option>
           <option value="FHFA">Federal Housing Finance Agency</option>
           <option value="FLRA">Federal Labor Relations Authority</option>
           <option value="FMC">Federal Maritime Commission</option>
           <option value="FMCS">Federal Mediation And Conciliation Service</option>
           <option value="FMSHRC">Federal Mine Safety and Health Review Commission</option>
           <option value="FOMC">Federal Open Market Committee</option>
           <option value="FRB">Board of Governors of the Federal Reserve System</option>
           <option value="FRTIB">Federal Retirement Thrift Investment Board</option>
           <option value="FTC">Federal Trade Commission</option>
           <option value="GCERC">Gulf Coast Ecosystem Restoration Council</option>
           <option value="GSA">U.S. General Services Administration</option>
           <option value="HSTSF">Harry S. Truman Scholarship Foundation</option>
           <option value="IMLS">Institute of Museum and Library Services</option>
           <option value="IAF">Inter-American Foundation</option>
           <option value="JMMFF">James Madison Memorial Fellowship Foundation</option>
           <option value="LSC">Legal Services Corporation</option>
           <option value="MMC">Marine Mammal Commission</option>
           <option value="MSPB">Merit Systems Protection Board</option>
           <option value="MCC">Millennium Challenge Corporation</option>
           <option value="MKUF">Morris K. Udall Foundation</option>
           <option value="NASA">National Aeronautics and Space Administration</option>
           <option value="NARA">National Archives and Records Administration</option>
           <option value="NCPC">National Capital Planning Commission</option>
           <option value="NCMNPS">National Commission on Military, National, and Public Service</option>
           <option value="NCD">National Council on Disability </option>
           <option value="NCUA">National Credit Union Administration</option>
           <option value="NEA">National Endowment for the Arts</option>
           <option value="NEH">National Endowment for the Humanities</option>
           <option value="NIGC">National Indian Gaming Commision</option>
           <option value="NLRB">National Labor Relations Board</option>
           <option value="NMB">National Mediation Board</option>
           <option value="NSF">National Science Foundation</option>
           <option value="NTSB">National Transportation Safety Board</option>
           <option value="NW">Neighborhood Reinvestment Corporation</option>
           <option value="USNRC">U.S. Nuclear Regulatory Commission</option>
           <option value="NWTRB">U.S. Nuclear Waste Technical Review Board</option>
           <option value="OSHRC">Occupational Safety and Health Review Commission</option>
           <option value="OGE">Office of Government Ethics</option>
           <option value="ONHIR">Office of Navajo and Hopi Indian Relocation</option>
           <option value="OPM">Office of Personnel Management</option>
           <option value="OSC">Office of Special Counsel</option>
           <option value="ODNI">Office of the Director of National Intelligence</option>
           <option value="OPIC">Overseas Private Investment Corporation</option>
           <option value="PC">Peace Corps</option>
           <option value="PBGC">Pension Benefit Guaranty Corporation</option>
           <option value="PRC">Postal Regulatory Commission</option>
           <option value="PT">Presidio Trust</option>
           <option value="PCLOB">Privacy and Civil Liberties Oversight Board</option>
           <option value="RATB">Recovery Accountability and Transparency Board</option>
           <option value="US RRB">Railroad Retirement Board</option>
           <option value="SEC">U.S. Securities and Exchange Commission</option>
           <option value="SSS">Selective Service System</option>
           <option value="SBA">U.S. Small Business Administration</option>
           <option value="SSA">Social Security Administration</option>
           <option value="SSAB">Social Security Advisory Board</option>
           <option value="SIGAR">Special Inspector General for Afghanistan Reconstruction</option>
           <option value="SIGIR">Special Inspector General for Iraq Reconstruction</option>
           <option value="STB">Surface Transportation Board</option>
           <option value="TVA">Tennessee Valley Authority</option>
           <option value="USAB">U.S. Access Board</option>
           <option value="US ADF">U.S. African Development Foundation</option>
           <option value="CO">U.S. Copyright Office</option>
           <option value="EAC">U.S. Election Assistance Commission</option>
           <option value="USIP">U.S. Institute of Peace</option>
           <option value="USICH">U.S. Interagency Council on Homelessness</option>
           <option value="USIBWC">U.S. International Boundary and Water Commission</option>
           <option value="USITC">U.S. International Trade Commission</option>
           <option value="USPS">U.S. Postal Service</option>
           <option value="USTDA">United States Trade and Development Agency</option>
               </select>
     <button className="usa-button usa-button-outline usa-button-small" type="submit" href="#">Select Agency Components</button>
      </div>
    <div className="form-group field use-dark-icons usa-grid">
      <a href="#"><span className="icon-plus " />
        </a><p className="usa-alert-text"><a href="#"><span>Add Another Agency or Component<span /></span></a></p>
          </div>
       </fieldset>
         </div>
   {/* FOIA Agency Page Content End */}
    <div className="clear">&nbsp;</div>
     <div className="clear" />
     {/* Begin Modal Inner HTML */}
  <div className="form-group usa-width-one-half visually-hidden">
         <h3 className="sans">Select Agency Components</h3>
           <div className="usa-grid-full">
      <div id="container">
       <fieldset classNam="usa-fieldset-inputs usa-sans">
       <ul className="usa-unstyled-list">
         <li className="usa-width-one-third">
           <input id="Agency 1" type="checkbox" name="Agency 1" />
           <label for="agency 1">Agency 1</label>
         </li>
       <li className="usa-width-one-third">
           <input id="Agency 2" type="checkbox" name="Agency 2" />
           <label for="agency 2">Agency 2</label>
         </li>
       <li className="usa-width-one-third">
           <input id="Agency 3" type="checkbox" name="Agency 3"  />
           <label for="agency 3">Agency 3</label>
         </li>
         <li className="usa-width-one-third">
           <input id="Agency 4" type="checkbox" name="Agency 4"  />
           <label for="agency 4">Agency 4</label>
         </li>
       <li className="usa-width-one-third">
           <input id="Agency 5" type="checkbox"  name="Agency 5" />
           <label for="agency 5">Agency 5</label>
         </li>
       <li className="usa-width-one-third">
           <input id="Agency 6" type="checkbox" name="Agency 6"  />
           <label for="agency 6">Agency 6</label>
         </li>
         <li className="usa-width-one-third">
           <input id="Agency 7" type="checkbox" name="Agency 7" />
           <label for="agency 7">Agency 7</label>
         </li>
       <li className="usa-width-one-third">
           <input id="Agency 8" type="checkbox"  name="Agency 8" />
           <label for="agency 8">Agency 8</label>
         </li>
         <li className="usa-width-one-third">
           <input id="Agency 9" type="checkbox" name="Agency 9" />
           <label for="agency 9">Agency 9</label>
         </li>
       <li className="usa-width-one-third">
           <input id="Agency 10" type="checkbox" name="Agency 10" />
           <label for="agency 10">Agency 10</label>
         </li>
       <li className="usa-width-one-third">
           <input id="Agency 11" type="checkbox" name="Agency 11"  />
           <label for="agency 11">Agency 11</label>
         </li>
         <li className="usa-width-one-third">
           <input id="Agency 12" type="checkbox" name="Agency 12"  />
           <label for="agency 12">Agency 12</label>
         </li>
       <li className="usa-width-one-third">
           <input id="Agency 13" type="checkbox"  name="Agency 13" />
           <label for="agency 13">Agency 13</label>
         </li>
       <li className="usa-width-one-third">
           <input id="Agency 14" type="checkbox" name="Agency 14"  />
           <label for="agency 14">Agency 14</label>
         </li>
         <li className="usa-width-one-third">
           <input id="Agency 15" type="checkbox" name="Agency 15" />
           <label for="agency 15">Agency 15</label>
         </li>
       <li className="usa-width-one-third">
           <input id="Agency 16" type="checkbox"  name="Agency 16" />
           <label for="agency 16">Agency 16</label>
         </li>
       </ul>
       </fieldset>

       <div className="clear">&nbsp;</div>
               <p className="usa-alert-text"><a href="#"><span>Select All<span /></span></a>  |  <a href="#"><span>Select None<span /></span></a></p>
            <button className="usa-button usa-button-primary-alt usa-button-small" type="submit" href="#"><b>Submit</b></button>
            <button className="usa-button usa-button-outline usa-button-small" type="submit" href="#"><b>Cancel</b></button>
       </div>
         </div>
            </div>
    {/* End Modal Inner HTML */}
                 </div>

    );
   }
  }
  export default FoiaReportFormSectionOne;
