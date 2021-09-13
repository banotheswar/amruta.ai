import React from 'react'

const Details = () => {
    return (
        <div>
            
            {/* <div class="academytabs st" style=" position: sticky;
	 position: -webkit-sticky;	
	  top: 0;
	  z-index:9; 
	  background:white" > */}
      <div class="academytabs st" style={{position: 'sticky',
	 position: '-webkit-sticky',	
	  top: 0, zIndex: 9,  background:'white'}} >

    <div class="container"  >
      <ul class="nav nav-tabs nav" role="tablist">
        <li role="presentation" class=""><a href="#keyheight" aria-controls="financial" role="tab" data-toggle="tab"
            class="active">Key Highlights</a></li>
        <li role="presentation"><a href="#whyus" > Why Us </a></li>
        <li role="presentation"><a href="#global" >Global
            Instructors</a></li>
        <li role="presentation"><a href="#syllabus" >Syllabus</a>
        </li>
        <li role="presentation"><a href="#tools" >Tools & Platforms
          </a></li>
        <li role="presentation"><a href="#projects" > Projects </a>
        </li>
        <li role="presentation"><a href="#usecase" > Use Cases </a>
        </li>
      </ul>
    </div>
</div>


<br/>
    <div class="tab-content">

      <div class="container">


        <div role="tabpanel" name="keyheight"  class="tab-pane active" id="keyheight">
          <h3 class="title3">Key Highlights</h3>


          <div class="row">
            <div class="col-md-6">
              <div class="academytabscol">
                <div class="keyicons"><img src="images/certificate.svg" alt="Key Highlights" title="Key Highlights"/>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <img src="images/certifed.jpg" alt="Key Highlights" title="Key Highlights"/>
                  </div>
                  <div class="col-md-6 d-flex align-items-center">
                    <h6>
                      Physical and Virtual Classrooms </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="academytabscol">
                <div class="keyicons"><img src="images/industry.svg" alt="Key Highlights" title="Key Highlights"/></div>
                <div class="row">
                  <div class="col-md-6">
                    <img src="images/gettrained.jpg" alt="Key Highlights" title="Key Highlights"/>
                  </div>
                  <div class="col-md-6 d-flex align-items-center">
                    <h6>
                      Recorded Lectures to Recite </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row pad_t80">
            <div class="col-md-6">
              <div class="academytabscol">
                <div class="keyicons"><img src="images/online.svg" alt="Key Highlights" title="Key Highlights"/></div>
                <div class="row">
                  <div class="col-md-6">
                    <img src="images/onlinetrain.jpg" alt="Key Highlights" title="Key Highlights"/>
                  </div>
                  <div class="col-md-6 d-flex align-items-center">
                    <h6>
                      Live Projects with Partners </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="academytabscol">
                <div class="keyicons"><img src="images/projects.svg" alt="Key Highlights" title="Key Highlights"/></div>
                <div class="row">
                  <div class="col-md-6">
                    <img src="images/realtimeimg.jpg" alt="Key Highlights" title="Key Highlights"/>
                  </div>
                  <div class="col-md-6 d-flex align-items-center">
                    <h6>
                      Dedicated Job & Internship Assistance </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
		


  </div>





  <div class="aboutamruta whowe" id="whyus">
    <div class="container">
      <div class="row">
        <div class="col-md-5 text-center pad_t30">
          <img src="images/whoweare.jpg" alt="About Amruta" title="About Amruta" class="wow fadeInLeft animated"/>
        </div>
        <div class="col-md-7">
          <h3 class="wow fadeInUp animated title4">Who are we and <br/> why should you learn from us? </h3>
          <p class="wow fadeInDown animated">At Amruta, we provide traditional and non-traditional data analytics
            applications that can solve problems in different sectors. It enables students and working professionals
            build solid foundation in their AI & ML career along with provision of OXAI knowledge. The Academy is
            established to mentor people of different capabilities and make them job ready through internships and
            real-life projects under the guidance of Artificial Intelligence industry experts. <br/> <br/>



            The Amruta Artificial Intelligence program enables you to unlock your potential as a professional by taking
            you through AI-based technologies such as Machine Learning, Deep Learning, Computer Vision, Speech
            Recognition, Natural Language Processing and Reinforcement Learning. </p>

          <ul class="wow fadeInUp animated">
            <li>Designed for fresher graduates and working professionals.</li>

            <li> Hybrid Teaching Program (Inclusive of Direct and Virtual classes). </li>

            <li>Profile Building Workshops and Hiring Drives </li>

            <li>Real-time projects, case studies and assignments. </li>

            <li>24/7 Learning Support </li>


            <li>Placement assistance through Resume Building and Hiring Drives. </li>

            <li>Dedicated mentor to provide 360 Degree Support. </li>

          </ul>
		  <br/>
		  
		  		<a href="#" class="reqlink" data-toggle="modal" data-target="#get_trained">Talk to our expert</a>

        </div>

      </div>

    </div>
  </div>






  <div class="globalinstructors" id="global">

    <div class="container">

      <h3>Global Instructors</h3>

      <div class="row">
        <div class="col-md-12 text-center">
          <div class="globalrow">
            <div class="pic"> <img src="images/bejurao.jpg" alt="About Amruta" title="About Amruta"
                class="wow fadeInLeft animated"/>
              <a href="https://www.linkedin.com/in/beju-rao-2b7727/" class="linkedin"> <i
                  class="fa fa-plus fa-linkedin"></i> </a>
            </div>
            <h5>Beju Rao </h5>
            <h6>Founder, President and CEO</h6>
            <p>Prof. Beju Rao has a PhD from Texas A&M University in Industrial Engineering and Operations Research and
              extensive work experience in several multi-national organizations. </p>
          </div>






{/* <div style="margin:80px;" class="globalrow"> */}
<div style={{margin: '80px'}} class="globalrow">
            <div class="pic"> <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGB_aWdDUF3Hg/profile-displayphoto-shrink_400_400/0/1517723455271?e=1634169600&v=beta&t=oO67l1LjiZI_up23Sep9J8y0b-4vlt0RfHzfTaoET0o" alt="About Amruta" title="About Amruta"
                class="wow fadeInLeft animated"/>
              <a href="https://www.linkedin.com/in/cgarc/" class="linkedin"> <i
                  class="fa fa-plus fa-linkedin"></i> </a>
            </div>
            <h5>Christopher Garcia </h5>
            <h6>Associate Proffessor  of Quantitative Methods at University of Mary Washington </h6>
            <p>Prof Christopher Garcia has capacious expertise in Data Science, Machine Learning and Combinatorial Optimization along with substantial work experience. </p>
          </div>






        </div>


      </div>


</div>
</div>

  


  <div class="curriculamcol" id="syllabus">

    <div class="container">
      <h3>Comprehensive Curriculum</h3>
      <p class="font4">The curriculum has been designed by faculty from Amruta Experts </p>

      <div class="row pad_t30">

        <div class="col-md-8">
          <div class="bs-example">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne">
                      Fundamental Of Artificial Intelligence <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Description: Artificial Intelligence is a multidisciplinary field that uses scientific methods,
                      processes, algorithms and systems to extract knowledge and insights from structured and
                      unstructured data. In this first module we will introduce to the field of Artificial Intelligence
                      and how it relates to other fields of data like Artificial Intelligence, Machine Learning and Deep
                      Learning.
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Introduction to
                      Artificial Intelligence</p>

                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>High level view of
                      Artificial Intelligence,Artificial Intelligence & Machine Learning</p>

                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Subtle differences
                      between Artificial Intelligence,Artificial Intelligence & Machine Learning</p>

                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Terms & Terminologies
                      of Artificial Intelligence Machine Learning</p>

                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Understanding an end to
                      end Artificial Intelligence Pipeline, Implementation cycle</p>

                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseTwo"> Mathematics for Artificial Intelligence <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span> </button>
                  </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">

                    <p>Description: Mathematics is very important in the field of Artificial Intelligence as concepts
                      within mathematics aid in identifying patterns and assist in creating algorithms. The
                      understanding of various notions of Statistics and Probability Theory are key for the
                      implementation of such algorithms in Artificial Intelligence.
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Linear Algebra</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Matrices, Matrix
                      Operations</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Eigenvalues, Eigen
                      Vectors</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Scalar, Vector and
                      Tensors</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Prior and Posterior
                      Probability</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Conditional Probability
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Calculus</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Differentiation,
                      Gradient and Cost Functions</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Graph Theory</p>

                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseThree"> Statistics For Artificial Intelligence <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Description: This module focuses on understanding statistical concepts required for Artificial
                      Intelligence, Machine Learning and Deep Learning. In this module, you will be introduced to the
                      estimation of various statistical measures of a data set, simulating random distributions,
                      performing hypothesis testing, and building statistical models.
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Descriptive Statistics
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Types of Data (Discrete
                      vs Continuous)</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Types of Data (Nominal,
                      Ordinal)</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Measures of Central
                      Tendency (Mean, Median, Mode)</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Measures of Dispersion
                      (Variance, Standard Deviation)</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Range, Quartiles, Inter
                      Quartile Ranges</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Measures of Shape
                      (Skewness and Kurtosis)</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Tests for Association
                      (Correlation and Regression)</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Random Variables</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Probability
                      Distributions</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Standard Normal
                      Distribution</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Probability
                      Distribution Function</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Probability Mass
                      Function</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Cumulative Distribution
                      Function</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Inferential Statistics
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Statistical sampling &
                      Inference</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Hypothesis Testing</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Null and Alternate
                      Hypothesis</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Margin of Error</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Type I and Type II
                      errors</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>One Sided Hypothesis
                      Test, Two-Sided Hypothesis Test</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Tests of Inference:
                      Chi-Square, T-test, Analysis of Variance</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>t-value and p-value</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Confidence Intervals
                    </p>

                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseFour">Python for Artificial Intelligence <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                  <div class="card-body">
                    <p><strong>Python for Artificial Intelligence</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> NumPy</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Pandas</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Matplotlib & Seaborn
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Jupyter Notebook</p>
                    <p><strong>NumPy</strong></p>
                    <p>NumPy is a Python library that works with arrays when performing scientific computing with
                      Python. Explore how to initialize and load data into arrays and learn about basic array
                      manipulation operations using NumPy.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Loading data with
                      NumPy</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Comparing NumPy with
                      Traditional Lists</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> NumPy Data Types</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Indexing and Slicing
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Copies and Views</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Numerical Operations
                      with NumPy</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Matrix Operations on
                      NumPy Arrays</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Aggregations functions
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Shape Manipulations
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Broadcasting</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Statistical operations
                      using NumPy</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Resize, Reshape, Ravel
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Image Processing with
                      NumPy</p>
                    <p><strong>Pandas</strong></p>
                    <p>Pandas is a Python library that provides utilities to deal with structured data stored in the
                      form of rows and columns. Discover how to work with series and tabular data, including
                      initialization, population, and manipulation of Pandas Series and DataFrames.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Basics of Pandas</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Loading data with
                      Pandas</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Series</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Operations on Series
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> DataFrames and
                      Operations of DataFrames</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Selection and Slicing
                      of DataFrames</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Descriptive statistics
                      with Pandas</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Map, Apply, Iterations
                      on Pandas DataFrame</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Working with text data
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Multi Index in Pandas
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> GroupBy Functions</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Merging, Joining and
                      Concatenating DataFrames</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Visualization using
                      Pandas</p>

                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingFive">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseFive"> Data Visualization using Matplotlib <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Matplotlib is a plotting library for the Python programming language and its numerical
                      mathematics extension NumPy. It provides an object-oriented API for embedding plots into
                      applications using general-purpose GUI toolkits like Tkinter, wxPython, Qt, or GTK+</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Anatomy of Matplotlib
                      figure</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Plotting Line plots
                      with labels and colors</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Adding markers to line
                      plots</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Histogram plots</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Scatter plots</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Size, Color and Shape
                      selection in Scatter plots.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Applying Legend to
                      Scatter plots</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Displaying multiple
                      plots using subplots </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Boxplots,
                      scatter_matrix and Pair plots</p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingSix">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseSix"> Data Visualization using Seaborn <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Seaborn is a data visualization library that provides a high-level interface for drawing graphs.
                      These graphs are able to convey a lot of information, while also being visually appealing.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Basic Plotting using
                      Seaborn</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Violin Plots</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Box Plots</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Cat Plots</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Facet Grid</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Swarm Plot</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Pair Plot</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Bar Plot</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> LM Plot</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Variations in LM plot
                      using hue, markers, row and col</p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingSeven">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseSeven"> Exploratory Data Analysis <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Exploratory Data Analysis helps in identifying the patterns in the data by using basic
                      statistical methods as well as using visualization tools to displays graphs and charts. With EDA
                      we can assess the distribution of the data and conclude various models to be used.</p>
                    <p><strong>Pipeline ideas</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Exploratory Data
                      Analysis</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Feature Creation</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Evaluation Measures
                    </p>
                    <p><strong>Data Analytics Cycle ideas</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Data Acquisition</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Data Preparation</p>
                    <div class="pad_l40">
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Data cleaning</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Data Visualization
                      </p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Plotting</p>
                    </div>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Model Planning & Model
                      Building</p>
                    <p><strong>Data Inputting</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Reading and writing
                      data to text files</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Reading data from a
                      csv</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Reading data from JSON
                    </p>
                    <p><strong>Data preparation</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Selection and Removal
                      of Columns</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Transform</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Rescale</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Standardize</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Normalize</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Binarize</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> One hot Encoding</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Imputing</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Train, Test Splitting
                    </p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingEight">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseEight"> Machine Learning <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>In machine learning, computers apply statistical learning techniques to automatically identify
                      patterns in data. This module on Machine Learning is a deep dive to Supervised, Unsupervised
                      learning and Gaussian / Naive-Bayes methods. Also you will be exposed to different classification,
                      clustering and regression methods.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Introduction to
                      Machine Learning</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Applications of
                      Machine Learning</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Supervised Machine
                      Learning</p>
                    <div class="pad_l40">
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Classification</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Regression</p>
                    </div>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Unsupervised Machine
                      Learning</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Reinforcement Learning
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Latest advances in
                      Machine Learning</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Model Representation
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Model Evaluation </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Hyper Parameter tuning
                      of Machine Learning Models.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Evaluation of ML
                      Models.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Estimating and
                      Prediction of Machine Learning Models</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Deployment strategy of
                      ML Models.</p>

                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingNine">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseNine">Supervised Machine Learning – Classification <span
                        class="plus-minus"><i class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Supervised learning is one of the most popular techniques in machine learning. In this module,
                      you will learn about more complicated supervised learning models and how to use them to solve
                      problems.</p>
                    <p><strong>Classification methods & respective evaluation</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> K Nearest Neighbors
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Decision Trees </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Naive Bayes</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Stochastic Gradient
                      Descent</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> SVM – </p>
                    <div class="pad_l40">
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Linear</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Non linear</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Radial Basis Function
                      </p>
                    </div>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Random Forest</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Gradient Boosting
                      Machines</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> XGboost</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Logistic regression
                    </p>
                    <p><strong>Ensemble methods</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Combining models</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Bagging</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Boosting</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Voting</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Choosing best
                      classification method</p>
                    <p><strong>Model Tuning</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Train Test Splitting
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> K-fold cross
                      validation</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Variance bias tradeoff
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> L1 and L2 norm</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Overfit, underfit
                      along with learning curves variance bias sensibility using graphs </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Hyper Parameter Tuning
                      using Grid Search CV</p>
                    <p><strong>Respective Performance measures</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Different Errors (MAE,
                      MSE, RMSE)</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Accuracy, Confusion
                      Matrix, Precision, Recall</p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingTen">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseTen"> Supervised Machine Learning - Regression <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Regression is a type of predictive modelling technique which is heavily used to derive the
                      relationship between variables (the dependent and independent variables). This technique finds its
                      usage mostly in forecasting, time series modelling and finding the causal effect relationship
                      between the variables. The module discusses in detail about regression and types of regression and
                      its usage & applicability</p>
                    <p><strong>Regression</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Linear Regression</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Variants of Regression
                    </p>
                    <div class="pad_l40">
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Lasso</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Ridge</p>
                    </div>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Multi Linear
                      Regression</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Logistic Regression
                      (effectively, classification only)</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Regression Model
                      Improvement </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Polynomial Regression
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Random Forest
                      Regression</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Support Vector
                      Regression</p>
                    <p><strong>Respective Performance measures</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Different Errors (MAE,
                      MSE, RMSE)</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Mean Absolute Error
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Mean Square Error</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Root Mean Square Error
                    </p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingEleven">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseEleven"> Unsupervised Machine Learning <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven"
                  data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Unsupervised learning can provide powerful insights on data without the need to annotate
                      examples. In this module, you will learn several different techniques in unsupervised machine
                      learning.</p>
                    <p><strong>Clustering</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> K means</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Hierarchical
                      Clustering</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> DBSCAN</p>
                    <p><strong>Association Rule Mining</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Association Rule
                      Mining.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Market Basket Analysis
                      using Apriori Algorithm</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Dimensionality
                      reduction using Principal Component analysis (PCA)</p>
                  </div>
                </div>
              </div>


              <div class="card">
                <div class="card-header" id="headingTweley">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseTweley"> Natural Language Processing <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseTweley" class="collapse" aria-labelledby="headingTweley"
                  data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Natural language is essential to human communication, which makes the ability to process it an
                      important one for computers. In this module, you will be introduced to natural language processing
                      and some of the basic tasks.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Text Analytics</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Stemming,
                      Lemmatization and Stop word removal.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> POS tagging and Named
                      Entity Recognition</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Bigrams, Ngrams and
                      colocations</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Term Document Matrix
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Count Vectorizer</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Term Frequency and
                      TF-IDF </p>

                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingThirteen">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseThirteen"> Advanced Analytics <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen"
                  data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Advanced Analytics covers various areas like Time series Analysis, ARIMA models, Recommender
                      systems etc.</p>
                    <p><strong>Time series</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Time series Analysis.
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> ARIMA example</p>
                    <p><strong>Recommender Systems</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Content Based
                      Recommendation</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Collaborative
                      Filtering</p>

                  </div>
                </div>
              </div>


              <div class="card">
                <div class="card-header" id="headingFourteen">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseFourteen">Reinforcement Learning <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseFourteen" class="collapse" aria-labelledby="headingFourteen"
                  data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Reinforcement learning is an area of Machine Learning which takes suitable action to maximize
                      reward in a particular situation. It is employed by various software and machines to find the best
                      possible behavior or path it should take in a specific situation.</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Basic concepts of
                      Reinforcement Learning</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Action</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Reward</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Penalty Mechanism</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Feedback loop</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Deep Q Learning </p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingFifteen">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseFifteen"> Deep Learning with Kera and Tensor flow<span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseFifteen" class="collapse" aria-labelledby="headingFifteen"
                  data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Deep learning is part of a broader family of machine learning methods based on the layers used in
                      artificial neural networks. In this module, you’ll deep dive in the concepts of Neural Networks,
                      Convolutional Neural Networks, Recurrent Neural Networks, Auto Encoders and many more.</p>
                    <p><strong>Deep Learning</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Tensorflow & keras
                      installation</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> More elaborate
                      discussion on cost function</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Measuring accuracy of
                      hypothesis function</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Role of gradient
                      function in minimizing cost function</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Explicit discussion of
                      Bayes models</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Hidden Markov Models
                      (HMM)</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Optimization basics
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Sales Prediction of a
                      Gaming company using Neural Networks</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Build an Image
                      similarity engine. </p>
                    <p><strong>Deep Learning with Convolutional Neural Nets</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Architecture of CNN
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Types of layers in CNN
                    </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Different Filters and
                      Kernels</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Building an Image
                      classifier with and without CNN</p>
                    <p><strong>Recurrent neural nets</strong></p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Fundamental notions &
                      ideas</p>
                    <div class="pad_l40">
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Recurrent neurons
                      </p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Handling variable
                        length sequences </p>
                    </div>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Training a sequence
                      classifier</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Training to predict
                      Time series</p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingSixteen">
                  <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse"
                      data-target="#collapseSixteen"> Deep Neural Network <span class="plus-minus"><i
                          class="fa fa-plus fa-angle-down"></i></span></button>
                  </h2>
                </div>
                <div id="collapseSixteen" class="collapse" aria-labelledby="headingSixteen"
                  data-parent="#accordionExample">
                  <div class="card-body">
                    <p>Mapping the human mind with deep neural networks (DNNs), several building blocks of artificial
                      neural networks (ANNs), the architecture of DNN and its building blocks, reinforcement learning in
                      DNN concepts, various parameters, layers, and optimization algorithms in DNN, and activation
                      functions. </p>

                  </div>
                </div>
              </div>








            </div>
          </div>



        </div>
        <div class="col-md-4">

          <div class="curriculamcolcount" style={{position:'sticky',top:'65px'}}>

            <div class="curriculamcolcountrow">
              <span class="countlist docbg"> <img src="images/docicon.png" alt="About Amruta" title="About Amruta"
                  class="wow fadeInLeft animated"/>
              </span>
              <span class="countinfo">
                <strong>25+</strong>
                Modules
              </span>
            </div>

            <div class="curriculamcolcountrow">
              <span class="countlist probg"> <img src="images/projecticon.png" alt="About Amruta" title="About Amruta"
                  class="wow fadeInLeft animated"/>
              </span>
              <span class="countinfo">
                <strong>10+</strong>
                Projects
              </span>
            </div>
            <div class="curriculamcolcountrow">
              <span class="countlist durationbg"> <img src="images/durationicon.png" alt="About Amruta"
                  title="About Amruta" class="wow fadeInLeft animated"/>
              </span>
              <span class="countinfo">
                <strong>225+ hrs</strong>
                Learning Content
              </span>
            </div>
            <a href="#" class="currcbtn">DOWNLOAD CURRICULUM <img src="images/curc-donload.png" alt="About Amruta"
                title="About Amruta" class="wow fadeInLeft animated"/></a>
          </div>



        </div>



      </div>

   

    <div class="container pad_t30" id="tools">
      <h3> Languages and Tools Covered </h3>


      <div class="awardlogos">
        <img src="images/python.jpg" alt="Our Awards" title="Our Awards" class="wow fadeInUp animated"/>
        <img src="images/numpy.jpg" alt="Our Awards" title="Our Awards" class="wow fadeInUp animated"/>
        <img src="images/keras.jpg" alt="Our Awards" title="Our Awards" class="wow fadeInUp animated"/>
        <img src="images/tensorflow.jpg" alt="Our Awards" title="Our Awards" class="wow fadeInUp animated"/>
        <img src="images/mat.jpg" alt="Our Awards" title="Our Awards" class="wow fadeInUp animated"/>
        <img src="images/learn.jpg" alt="Our Awards" title="Our Awards" class="wow fadeInUp animated"/>

      </div>

    </div>
 








<div class="livepro_col" id="projects">
    <div class="container">
      <h1  class="wow fadeInUp animated">Live Projects</h1>
      <div class="">
        <div class="row pad_t50">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/projects/1.png" alt="Datascience Training" /></div>
              <div class="pro-card-cnt">
                <h4>Build an XML to CSV converter using Python</h4>
                <p>This python project which will help students to brush up their basic python skills to build a real-world XML to CSV... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/projects/2.png" alt="Datascience Training" /></div>
              <div class="pro-card-cnt">
                <h4>Building a Photo Editor from scratch using Flask and NumPy</h4>
                <p>NumPy is a versatile package to do data operations... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/projects/3.png" alt="Datascience Training" /></div>
              <div class="pro-card-cnt">
                <h4>Exploratory Data Analysis on Retail Shop Sales data.</h4>
                <p>Performing exploratory data analysis to find patterns in data which will determine the approach to take in Machine... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
            </div>
          </div>
        </div>
        <div class="row pad_t50">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/projects/4.png" alt="Datascience Training" /></div>
              <div class="pro-card-cnt">
                <h4>Fruit type prediction using K Nearest Neighbors algorithm.</h4>
                <p>K Nearest Neighbor algorithm is used to predict the type of fruit given its mass, height, width and color... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/projects/5.png" alt="Datascience Training" /></div>
              <div class="pro-card-cnt">
                <h4>Predict Malignancy in Mammographic Masses using Decision Tree Classifiers</h4>
                <p>Mammographic masses is a public dataset from UCI machine... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/projects/6.png" alt="Datascience Training" /></div>
              <div class="pro-card-cnt">
                <h4>Predict whether a candidate will be shortlisted in H1B Visa process using Random Forest Algorithm.</h4>
                <p>Every year there are close... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
            </div>
          </div>
        </div>
        
        <div class="more_live_projects">
          <div class="row pad_t50">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/7.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4> Predict Breast Cancer using Support Vector Machine algorithm</h4>
                  <p>Wisconsin Breast Cancer dataset has 569 sample of Breast cancer observations determining Malignancy... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/8.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>HR Analytics for Attrition Prediction using Logistic Regression</h4>
                  <p>Employee Attrition is an important subject to gauge the satisfaction of the employee in... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/9.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>Predicting Housing prices using Regression:</h4>
                  <p>Predict the sales price for each house based on input features provided for the ... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
          </div>
          <div class="row pad_t50">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/10.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>Social Network Ads based Prediction</h4>
                  <p>Predicting if a user buys a specific product or not based on the ad populated on the Social... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/11.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>Retail Customer segmentation based on spending patterns</h4>
                  <p> Customer analysis plays a crucial role in determining the profitability of Retail... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/12.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>Market Basket Analysis using Apriori Algorithm</h4>
                  <p>Market Basket Analysis is a technique which identifies the strength of association between... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
          </div>
          <div class="row pad_t50">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/13.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>SMS Spam Detection using Natural Language Processing</h4>
                  <p> In our day-to-day lives, we receive a large number of spam/junk messages either in ... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/14.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>Sentiment analysis on Restaurant Reviews using Natural Language processing and Supervised Learning </h4>
                  <p>It involves in identifying and... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/15.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>Image Classification using Deep Learning</h4>
                  <p> Classifying Images based on the features is a tough problem. With Deep Learning algorithms like CNN... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
          </div>
          <div class="row pad_t50">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/16.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>Content Based Recommender Engine using Deep Learning</h4>
                  <p>Content based recommender systems use the content in the data to segment items and... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/17.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>Chatbots using Recurrent Neural Networks and Deep Learning</h4>
                  <p> A chatbot is an artificial intelligence (AI) software that can simulate a conversation (or a chat) with a user in... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/18.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>Stock market price prediction</h4>
                  <p> This project deals with the predictions of stock market prices using history of Data. It also considers the physical factors... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
          </div>
          <div class="row pad_t50">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div class="pro-card">
                <div class="pro-card-img"><img src="images/projects/19.png" alt="Datascience Training" /></div>
                <div class="pro-card-cnt">
                  <h4>Exploratory Data analysis of Crime records in Boston</h4>
                  <p>This project analyses data using quantitative prediction of crimes in Boston and drawing visualizations of Trends in the... </p>
                <a href="#" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  


  <div class="cases usecase" id="usecase">

    <div class="container">
      <h3 class="wow fadeInUp">Use cases</h3>

      <div role="tabpanel" class="tabpanel">

        
        <ul class="nav nav-tabs nav" role="tablist">
          <li style={{ fontFamily: 'Poppins'}} role="presentation"><a href="#financial" aria-controls="financial" role="tab"
              data-toggle="tab" class="active">Financial<br/>services</a></li>
          <li style={{ fontFamily: 'Poppins'}} role="presentation"><a href="#health" aria-controls="health" role="tab"
              data-toggle="tab">Health care</a></li>
          <li style={{ fontFamily: 'Poppins'}} role="presentation"><a href="#ecommerce" aria-controls="ecommerce" role="tab"
              data-toggle="tab">E-commerce & Hi-Tech</a></li>
          <li style={{ fontFamily: 'Poppins'}} role="presentation"><a href="#travel" aria-controls="travel" role="tab"
              data-toggle="tab">Supply chain, Travel<br/> and Transportation</a></li>
        </ul>

       
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="financial">
            <div class="row">

              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/fraudim.jpg" alt="Fraud detection" title="Fraud detection"/>
                  <div class="useposition">

                    <h4>Fraudulent insurance claims detection</h4>
                    <p>Amruta ai implements data standardization, data transformation, reporting, prediction, and
                      optimization services in insurance claims processing. We implemented Amruta PaaS (Platform as a
                      Service)to fraud detection in insurance claims at a carrier with 40 million.</p>

                  </div>

                </div>
              </div>
              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/ml.jpg" alt="Creadit risk scoring" title="Creadit risk scoring"/>
                  <div class="useposition">
                    <h4>ML infrastructure implementation</h4>
                    <p>Amruta ai MLIP facilitates end-to-end data analytic processes to support business decisions. We
                      implement MLIP on premise and in cloud, using staff augmentation and project delivery methods. We
                      implement it for Base III Compliance for a large Bank.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/aml.jpg" alt="Anti-money Laundering" title="Anti-money Laundering"/>
                  <div class="useposition">
                    <h4>AML transaction monitoring</h4>
                    <p>We implemented a rule-based system to monitor potential money laundering transactions across
                      depository, ATM, lending, money transfer, and travellers cheques products at multiple financial
                      services in firms.</p>
                  </div>
                </div>
              </div>

            </div>





          </div>
          <div role="tabpanel" class="tab-pane" id="health">
            <div class="row">

              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/processimg.jpg" alt="Fraud detection" title="Fraud detection"/>
                  <div class="useposition">

                    <h4>Process capability analysis</h4>
                    <p>Monitors triage acuity daily, along with door to doc, doc to disposition, and disposition to
                      discharge times. Lean six sigma methods are used to identify days, shifts and disposition types
                      that are outside the statistical control limits.</p>
                  </div>

                </div>
              </div>
              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/hospital.jpg" alt="Creadit risk scoring" title="Creadit risk scoring"/>
                  <div class="useposition">
                    <h4>Hospital Performance Monitor</h4>
                    <p>Safety and quality outcomes, spending/cost/LOS/discharge patterns, patient experience, and
                      through put measures are tracked on a daily, weekly and monthly basis. Various measures are
                      compared against the CMS to identify opportunity improvements. </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/reim.jpg" alt="Anti-money Laundering" title="Anti-money Laundering"/>
                  <div class="useposition">
                    <h4>Reimbursement Monitor</h4>
                    <p>Our tool helps project there venue that is at risk and helps achieve performance to meet
                      thresholds to maximize the reimbursements. Action able insights are presented to users as
                      interactive data visualizations. </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="ecommerce">
            <div class="row">

              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/fore.jpg" alt="Fraud detection" title="Fraud detection"/>
                  <div class="useposition">

                    <h4>Forecasting</h4>
                    <p>We implemented a regression/time series based approach for estimating future daily site visits by
                      region, channel, device and webpage, considering the daily, weekly, and monthly seasonality as
                      well as trend. </p>
                  </div>

                </div>
              </div>
              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/improving.jpg" alt="Creadit risk scoring" title="Creadit risk scoring"/>
                  <div class="useposition">
                    <h4>Improving customer retention</h4>
                    <p>We identified reasons for customer churn and implemented digital and mobile customer engagement
                      treatments to improve customer retention. </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/videoimg.jpg" alt="Anti-money Laundering" title="Anti-money Laundering"/>
                  <div class="useposition">
                    <h4>Video interference detection</h4>
                    <p>We implemented a video interference detection software system to identify potential violations
                      during proctored video sessions. Alerts can be relayed to the stakeholders to remedy or disqualify
                      the sessions.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="travel">
            <div class="row">

              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/booking.jpg" alt="Fraud detection" title="Fraud detection"/>
                  <div class="useposition">

                    <h4>Booking quality fore casting</h4>
                    <p>We implemented a ML model to forecast if a booking will cancel before the underlying cargo is
                      presented on the shipment date.</p>
                  </div>

                </div>
              </div>
              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/demand.jpg" alt="Creadit risk scoring" title="Creadit risk scoring"/>
                  <div class="useposition">
                    <h4>Demand forecasting</h4>
                    <p>We implemented a ML model to forecast demand for future travel/shipping dates. We used booking
                      levels, intensities and changes in the intensities, over the booking horizon, 10 weeks before the
                      travel date through the travel date, etc.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="usecol">
                  <img src="images/liqui.jpg" alt="Anti-money Laundering" title="Anti-money Laundering"/>
                  <div class="useposition">
                    <h4>Liquidation pricing</h4>
                    <p>We implemented a price forecasting for mobile devices that are returned by the customer, based on
                      the device make, model and condition, as well as the manufacturer’s new model releases.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>


  <div class="certifications">


    <div class="container">

      <div class="row">
        <div class="col-md-6 d-flex align-items-center">
          <div>
            <h3>Certification</h3>
            <p>Our Artificial Intelligence certificate is a rigid proof that you have taken a gigantic step of working
              on simulations, real life projects and case studies to master the domain. You can use it to boost your
              resume which sets you ahead in the competitive world. </p>
            <p><a href="#" class="reqlink" data-toggle="modal" data-target="#get_trained">Get Certified</a></p>
          </div>
        </div>
        <div class="col-md-6 text-right">
          <img src="images/certificate.png" alt="Anti-money Laundering" title="Anti-money Laundering"/>

        </div>

      </div>

    </div>


  </div>
  
  
  
   <div class="curriculamcol">
   <div class="container">
        <h3>FAQ’s</h3>
		

        <div class="accordion pad_t30" id="accordion2">
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqEight"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqEight"> Who should take this course? <span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqEight" class="panel-collapse collapse">
              <div class="card-body">
                <p>Programmers, Developers, Data Analysts, Freshers who are aspiring to be Data Scientists, Program Managers and Executives who want to get their hands dirty in Data</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqNine"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqNine"> What are the prerequisites for the Course? <span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqNine" class="panel-collapse collapse">
              <div class="card-body">
                <p>Basic knowledge of mathematics, programming concepts and a sense of curiosity and willingness to learn Artificial Intelligence.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqTen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqTen">How are the classes conducted? <span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqTen" class="panel-collapse collapse">
              <div class="card-body">
                <p>Classes are conducted over Weekdays and Weekends through classroom and online sessions. Please get in touch with Institute to get exact schedule and timings.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqEleven"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqEleven"> Who are the Faculty?<span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqEleven" class="panel-collapse collapse">
              <div class="card-body">
                <p>Artificial Intelligence Faculty are Industry Experts with over 12 years of experience in Information Technology and Data area. They are alumina of reputed colleges like IIT, BITS and other foreign universities.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqThirteen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqThirteen"> What is the duration of the Course? <span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqThirteen" class="panel-collapse collapse">
              <div class="card-body">
                <p>Course duration is 50 hours.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqFourteen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqFourteen"> What is the duration of the class? <span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqFourteen" class="panel-collapse collapse">
              <div class="card-body">
                <p>Weekday classes will be one hour long and Weekend classes will be three hours long.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqFifteen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqFifteen"> What is the course curriculum? <span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqFifteen" class="panel-collapse collapse">
              <div class="card-body">
                <p>Please find a detailed curriculum is available in the course curriculum section. </p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqSixteen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqSixteen">Do I need to know Python or R for learning Artificial Intelligence? <span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqSixteen" class="panel-collapse collapse">
              <div class="card-body">
                <p>We recommend and basic knowledge of Python for learning this course. Python is growing rapidly in popularity and we are optimistic that it will become the go to tool for Artificial Intelligence work in future. </p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqSeventeen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqSeventeen">Why should we learn Artificial Intelligence in Python? <span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqSeventeen" class="panel-collapse collapse">
              <div class="card-body">
                <p>Python has a rich set of libraries and frameworks to assist Artificial Intelligence work. It is open source and has a great community to support next generation Artificial Intelligence applications. All major companies use Python and its libraries for their Artificial Intelligence projects. </p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqEIghteen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqEIghteen">Will I get certification after I complete the course?<span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqEIghteen" class="panel-collapse collapse">
              <div class="card-body">
                <p>Yes, you will receive a certification of completion after you complete the course.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqEIghteen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqEIghteen">Do you cover Machine Learning and Deep Learning?<span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqEIghteen" class="panel-collapse collapse">
              <div class="card-body">
                <p>Yes, Machine Learning and Deep Learning will be covered in depth with practical applications.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqNinteen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqNinteen">Do you cover Machine Learning and Deep Learning?<span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqNinteen" class="panel-collapse collapse">
              <div class="card-body">
                <p>Yes, Machine Learning and Deep Learning will be covered in depth with practical applications.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqTweenty"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqTweenty">Do you help in Interview preparation?<span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqTweenty" class="panel-collapse collapse">
              <div class="card-body">
                <p>Yes, we will assist students with all the interview preparation techniques.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqTweentyOne"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqTweentyOne">Do you cover Math required for Artificial Intelligence?<span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqTweentyOne" class="panel-collapse collapse">
              <div class="card-body">
                <p>Math and Statistics necessary for Artificial Intelligence, Machine Learning and Deep Learning will be covered in the course. </p>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInDown animated">
            <div class="card-header" id="headingFaqTweentyTwo"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFaqTweentyTwo">What projects are offered during the course?<span class="updown_arrow"><i class="fa fa-angle-down"></i></span></a> </div>
            <div id="collapseFaqTweentyTwo" class="panel-collapse collapse">
              <div class="card-body">
                <p>There are more than 20 real time projects from industries like Healthcare, Banking, Retail, Human Resources, Education etc are covered during the course.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  
  <div class="awards clientel">
    <div class="container">

      
      <div class="pad_t50">
        <h3> Our Awards </h3>
        <div class="awardlogos">
          <img src="images/cit.png" alt="Our Awards" title="Our Awards" class="wow fadeInUp"/>
          <img src="images/timmy.png" alt="Our Awards" title="Our Awards" class="wow fadeInUp"/>
          <img src="images/bank.png" alt="Our Awards" title="Our Awards" class="wow fadeInUp"/>
          <img src="images/hfma.png" alt="Our Awards" title="Our Awards" class="wow fadeInUp"/>
          <img src="images/ssbd.png" alt="Our Awards" title="Our Awards" class="wow fadeInUp"/>
          <img src="images/sbdc.png" alt="Our Awards" title="Our Awards" class="wow fadeInUp"/>
          <img src="images/eng.png" alt="Our Awards" title="Our Awards" class="wow fadeInUp"/>
        </div>
      </div>
    </div>
  </div>
  <div class="container">

    <div class="gtcol">

      <div class="row">
        <div class="col-md-8">
          <h4>Learn from <span style= {{fontSize :'55px'}}>#1</span> Ranked Artificial Intelligence <br/> Program and
            Transform your Career</h4>
        </div>
        <div class="col-md-4 text-right">

          <a href="#" data-toggle="modal" data-target="#get_trained" class="wow fadeInUp"> Download Brochure </a>

        </div>
      </div>
    </div>

  </div>

  

  <div id="get_trained" class="modal fade academypop" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">×</button>
          <h4 class="modal-title">Fill Your Details</h4>
        </div>
        <div class="modal-body">
   <form action='https://crm.zoho.in/crm/WebToLeadForm' name="WebToLeads238279000000247002" method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory238279000000247002()' accept-charset='UTF-8'>

            <div class="row">
              <div class="col-md-12"> <label>  Name <sup>*</sup></label>
                <input type="text" class="" id='First_Name' name='First Name' maxlength='40'/>
              </div>

             

            </div>

            <div class="row">
              
              <div class="col-md-12">
                <label> Email <sup>*</sup></label>
                <input ftype='email' id='Email' name='Email' maxlength='100'/>
              </div>

            </div>

            <div class="row">
              <div class="col-md-12"><label> Phone Number <sup>*</sup> </label>
                <input type="number" id='Mobile' name='Mobile' maxlength='30'/>
              </div>

             
            </div>
            <div class="">
              <button type="submit" class="btn btn-success ">Submit </button>

            </div>
            <div id="success_message" style={{width:'100+%', height:'100+%', display:'none'}}>
              <h3>Sent your message successfully!</h3>
            </div>
            <div id="error_message" style={{width:'100+%', height:'100+%', display:'none'}}>
              <h3>Error</h3> Sorry there was an error sending your form.
            </div>
            
{/* <input type='text' style={{display:'none'}} name='xnQsjsdp' value='db887390625950606c3528f7d8a1164ea3e4ce4ababaa12434e7a981731ea790'></input>
 <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
 <input type='text' style={{display:'none'}} name='xmIwtLD' value='1bdfce1b6d4afb3a63c8558547057c408e65feac0b9a993e25545b5c87b082e7'></input>
 <input type='text'  style={{display:'none'}} name='actionType' value='TGVhZHM='></input>
 <input type='text' style={{display:'none'}} name='returnURL' value='https&#x3a;&#x2f;&#x2f;amruta.ai&#x2f;academy.html' > </input> */}
          </form>
        </div>
      </div>
    </div>
 
    </div>
      </div>
    </div>
    </div>
     </div>


    )
}

export default Details
