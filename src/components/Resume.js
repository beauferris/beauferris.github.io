

const Resume = () => {
    return (
        <div>
            <a className="download-toggle" style={{"position":"relative"}} href="/assets/hamzeyBeauferrisResume.pdf" download>Download</a>

            <div className="resume" style={{ "margin": "10px" }}>
                <h2>Education</h2>
                <p><b>BS in Computer Science with a minor in Economics,</b> University of Calgary - 2020 </p>
                <h2>Certification</h2>
                <p><b>Desktop Specialist,</b> Tableau  - 2020</p>
                <h2>EXPERIENCE </h2>
                <p><b>Junior Developer</b>, Epic Group - 2020-Present  </p>
                <div style={{ "marginLeft": "10px" }}>
                    <p >•	Collaborated on interdisciplinary team to develop a custom web application (HTML, CSS, JavaScript) for Dynamics 365 users.  </p>
                    <p> •	Application unifies sales team workflows and allows them to manage and quote 100% of their jobs in Dynamics 365.</p>
                    <p>   •	Directly worked with sales team/estimators to collect requirements and better understand their business needs.</p>
                    <p>•	Scraped product data from websites/pdfs for master product list using python.</p>
                    <p>•	Designed/developed data workflows using Microsoft Azure tools and Python to automate 70% of product data ingestion into Dynamics 365.</p>
                    <p>•	Developed and designed dashboards to summarize 10+ data intensive tables using tools such as Excel, Python, and PowerBI to forecast data and provide evidence for major business decisions.</p>
                </div>
                <p><b>Technical Manager,</b> Givergy Lt - 2018-2020  </p>
                <div style={{ "marginLeft": "10px" }}>
                    <p>•	Installed and managed Wi-Fi networks for large-scale charity auction events.</p>
                    <p>•	Setup included connecting access points, switches, and routers to Cisco servers.</p>
                    <p>•	Managed network load with 1000+ tablets connected.</p>
                    <p>•	Demoed bidding process for clients to help them better understand our product. </p>
                    <p>•	Edited front-end of auction websites for clients using HTML/CSS.</p>
                    <p>•	Created reports and dashboards after each event using data from events to help clients raise more. </p>
                    <p>•	Assessed client and guests changing needs, ensuring that they have a successful event. </p>
                </div>
            </div>


        </div>
    )

}

export default Resume;