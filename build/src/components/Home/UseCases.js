import React from 'react'

const UseCases = () => {
    return (
        <div>
            
  {/* <div class="cases">

<div class="container">
<h3 class="wow fadeInUp">Use cases</h3>

<div role="tabpanel" class="tabpanel">

<ul class="nav nav-tabs nav" role="tablist">
  <li role="presentation" class=""><a href="#financial" aria-controls="financial" role="tab" data-toggle="tab" class="active">Financial services</a></li>
  <li role="presentation"><a href="#health" aria-controls="health" role="tab" data-toggle="tab">Health care</a></li>
  <li role="presentation"><a href="#ecommerce" aria-controls="ecommerce" role="tab" data-toggle="tab">Ecommerce and retail</a></li>
  <li role="presentation"><a href="#travel" aria-controls="travel" role="tab" data-toggle="tab">Travel and Transportation</a></li>
</ul>

<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="financial">
    <div class="row">

      <div class="col-md-4">
        <div class="usecol wow fadeInUp">
          <img src="images/fraud.jpg" alt="Fraud detection" title="Fraud detection"/>
        <h4>Fraud detection</h4>
        <p> </p>
        <p> <a href="#">Read more</a> </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="usecol wow fadeInUp">
          <img src="images/credit.jpg" alt="Creadit risk scoring" title="Creadit risk scoring"/>
        <h4>Creadit risk scoring</h4>
        <p> </p>
        <p> <a href="#">Read more</a> </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="usecol wow fadeInUp">
          <img src="images/anti.jpg" alt="Anti-money Laundering" title="Anti-money Laundering"/>
        <h4>Anti-money Laundering</h4>
        <p>  </p>
        <p> <a href="#">Read more</a> </p>
        </div>
      </div>

    </div>
    




  </div>
  <div role="tabpanel" class="tab-pane" id="health"> <div class="row">

    <div class="col-md-4">
      <div class="usecol">
        <img src="images/fraud.jpg" alt="Fraud detection" title="Fraud detection"/>
      <h4>Fraud detection</h4>
      <p> </p>
      <p> <a href="#">Read more</a> </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="usecol">
        <img src="images/credit.jpg" alt="Creadit risk scoring" title="Creadit risk scoring"/>
      <h4>Creadit risk scoring</h4>
      <p> </p>
      <p> <a href="#">Read more</a> </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="usecol">
        <img src="images/anti.jpg" alt="Anti-money Laundering" title="Anti-money Laundering"/>
      <h4>Anti-money Laundering</h4>
      <p>  </p>
      <p> <a href="#">Read more</a> </p>
      </div>
    </div>

  </div> </div>
  <div role="tabpanel" class="tab-pane" id="ecommerce"> <div class="row">

    <div class="col-md-4">
      <div class="usecol">
        <img src="images/fraud.jpg" alt="Fraud detection" title="Fraud detection"/>
      <h4>Fraud detection</h4>
      <p> </p>
      <p> <a href="#">Read more</a> </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="usecol">
        <img src="images/credit.jpg" alt="Creadit risk scoring" title="Creadit risk scoring"/>
      <h4>Creadit risk scoring</h4>
      <p> </p>
      <p> <a href="#">Read more</a> </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="usecol">
        <img src="images/anti.jpg" alt="Anti-money Laundering" title="Anti-money Laundering"/>
      <h4>Anti-money Laundering</h4>
      <p> </p>
      <p> <a href="#">Read more</a> </p>
      </div>
    </div>

  </div></div>
  <div role="tabpanel" class="tab-pane" id="travel"> <div class="row">

    <div class="col-md-4">
      <div class="usecol">
        <img src="images/fraud.jpg" alt="Fraud detection" title="Fraud detection"/>
      <h4>Fraud detection</h4>
      <p>  </p>
      <p> <a href="#">Read more</a> </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="usecol">
        <img src="images/credit.jpg" alt="Creadit risk scoring0" title="Creadit risk scoring"/>
      <h4>Creadit risk scoring</h4>
      <p> </p>
      <p> <a href="#">Read more</a> </p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="usecol">
        <img src="images/anti.jpg" alt="Anti-money Laundering" title="Anti-money Laundering"/>
      <h4>Anti-money Laundering</h4>
      <p>  </p>
      <p> <a href="#">Read more</a> </p>
      </div>
    </div>

  </div></div>
</div>
</div>

</div>
</div>

 */}
  <div className="cases usecase">
          <div className="container">
            <h3 className="wow fadeInUp">Use cases</h3>
            <div role="tabpanel" className="tabpanel">
              {/* Nav tabs */}
              <ul className="nav nav-tabs nav" role="tablist">
                <li style={{fontFamily: 'Poppins'}} role="presentation"><a href="#financial" aria-controls="financial" role="tab" data-toggle="tab" className="active">Financial<br />services</a></li>
                <li style={{fontFamily: 'Poppins'}} role="presentation"><a href="#health" aria-controls="health" role="tab" data-toggle="tab">Health care</a></li>
                <li style={{fontFamily: 'Poppins'}} role="presentation"><a href="#ecommerce" aria-controls="ecommerce" role="tab" data-toggle="tab">E-commerce &amp; Hi-Tech</a></li>
                <li style={{fontFamily: 'Poppins'}} role="presentation"><a href="#travel" aria-controls="travel" role="tab" data-toggle="tab">Supply chain, Travel<br /> and Transportation</a></li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="financial">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/fraudim.jpg" alt="Fraud detection" title="Fraud detection" />
                        <div className="useposition">
                          <h4>Fraudulent insurance claims detection</h4>
                          <p>Amruta Inc implements data standardization, data transformation, reporting, prediction, and optimization services in insurance claims processing. We implemented Amruta PaaS (Platform as a Service)to fraud detection in insurance claims at a carrier with 40 million.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/ml.jpg" alt="Creadit risk scoring" title="Creadit risk scoring" />
                        <div className="useposition">
                          <h4>ML infrastructure implementation</h4>
                          <p>Amruta Inc MLIP facilitates end-to-end data analytic processes to support business decisions. We implement MLIP on premise and in cloud, using staff augmentation and project delivery methods. We implement it for Base III Compliance for a large Bank.</p> 
                        </div></div>
                    </div>
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/aml.jpg" alt="Anti-money Laundering" title="Anti-money Laundering" />
                        <div className="useposition">
                          <h4>AML transaction monitoring</h4>
                          <p>We implemented a rule-based system to monitor potential money laundering transactions across depository, ATM, lending, money transfer, and travellers cheques products at multiple financial services in firms.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane" id="health"> 
                  <div className="row">
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/processimg.jpg" alt="Fraud detection" title="Fraud detection" />
                        <div className="useposition">
                          <h4>Process capability analysis</h4>
                          <p>Monitors triage acuity daily, along with door to doc, doc to disposition, and disposition to discharge times. Lean six sigma methods are used to identify days, shifts and disposition types that are outside the statistical control limits.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/hospital.jpg" alt="Creadit risk scoring" title="Creadit risk scoring" />
                        <div className="useposition">
                          <h4>Hospital Performance Monitor</h4>
                          <p>Safety and quality outcomes, spending/cost/LOS/discharge patterns, patient experience, and through put measures are tracked on a daily, weekly and monthly basis. Various measures are compared against the CMS to identify opportunity improvements. </p>
                        </div></div>
                    </div>
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/reim.jpg" alt="Anti-money Laundering" title="Anti-money Laundering" />
                        <div className="useposition">
                          <h4>Reimbursement Monitor</h4>
                          <p>Our tool helps project there venue that is at risk and helps achieve performance to meet thresholds to maximize the reimbursements. Action able insights are presented to users as interactive data visualizations. </p>
                        </div>
                      </div>
                    </div>
                  </div> </div>
                <div role="tabpanel" className="tab-pane" id="ecommerce"> 
                  <div className="row">
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/fore.jpg" alt="Fraud detection" title="Fraud detection" />
                        <div className="useposition">
                          <h4>Forecasting</h4>
                          <p>We implemented a regression/time series based approach for estimating future daily site visits by region, channel, device and webpage, considering the daily, weekly, and monthly seasonality as well as trend. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/improving.jpg" alt="Creadit risk scoring" title="Creadit risk scoring" />
                        <div className="useposition">
                          <h4>Improving customer retention</h4>
                          <p>We identified reasons for customer churn and implemented digital and mobile customer engagement treatments to improve customer retention. </p>
                        </div></div>
                    </div>
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/videoimg.jpg" alt="Anti-money Laundering" title="Anti-money Laundering" />
                        <div className="useposition">
                          <h4>Video interference detection</h4>
                          <p>We implemented a video interference detection software system to identify potential violations during proctored video sessions. Alerts can be relayed to the stakeholders to remedy or disqualify the sessions.</p>
                        </div>
                      </div>
                    </div>
                  </div></div>
                <div role="tabpanel" className="tab-pane" id="travel">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/booking.jpg" alt="Fraud detection" title="Fraud detection" />
                        <div className="useposition">
                          <h4>Booking quality fore casting</h4>
                          <p>We implemented a ML model to forecast if a booking will cancel before the underlying cargo is presented on the shipment date.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/demand.jpg" alt="Creadit risk scoring" title="Creadit risk scoring" />
                        <div className="useposition">
                          <h4>Demand forecasting</h4>
                          <p>We implemented a ML model to forecast demand for future travel/shipping dates. We used booking levels, intensities and changes in the intensities, over the booking horizon, 10 weeks before the travel date through the travel date, etc.</p>
                        </div></div>
                    </div>
                    <div className="col-md-4">
                      <div className="usecol">
                        <img src="images/liqui.jpg" alt="Anti-money Laundering" title="Anti-money Laundering" />
                        <div className="useposition">
                          <h4>Liquidation pricing</h4>
                          <p>We implemented a price forecasting for mobile devices that are returned by the customer, based on the device make, model and condition, as well as the manufacturer’s new model releases.</p>
                        </div>
                      </div>
                    </div>
                  </div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="awards">
          <div className="container">
            <h3> Our Awards </h3>
            <div className="awardlogos">
              <img src="images/cit.png" alt="Our Awards" title="Our Awards" className="wow fadeInUp" />
              <img src="images/timmy.png" alt="Our Awards" title="Our Awards" className="wow fadeInUp" />
              <img src="images/bank.png" alt="Our Awards" title="Our Awards" className="wow fadeInUp" />
              <img src="images/hfma.png" alt="Our Awards" title="Our Awards" className="wow fadeInUp" />
              <img src="images/ssbd.png" alt="Our Awards" title="Our Awards" className="wow fadeInUp" />
              <img src="images/sbdc.png" alt="Our Awards" title="Our Awards" className="wow fadeInUp" />
              <img src="images/eng.png" alt="Our Awards" title="Our Awards" className="wow fadeInUp" />
            </div>
          </div>
        </div>

        </div>
    )
}

export default UseCases
