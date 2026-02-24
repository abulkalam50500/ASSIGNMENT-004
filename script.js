
let InterviewJobsCollection = [];
let RejectedJobsCollection = [];


const total_jobs_count = document.getElementById("total_jobs_count");
const total_inteview_jobs_count = document.getElementById("total_interview_jobs_count");
const total_rejected_jobs_count = document.getElementById("total_rejected_jobs_count");

// tabing btn
const jobsTabingBtn = document.getElementById("jobs_tabing_btn");
const interviewjobsTabingBtn = document.getElementById("interview_jobs_tabing_btn");
const RejectedjobsTabingBtn = document.getElementById("rejected_jobs_tabing_btn");

// jobs section 
const AllJobsSection = document.getElementById("All_jobs");
const AllInterviewJobsSection = document.getElementById("interview_jobs");
const AllRejectedJobsSection = document.getElementById("rejected_jobs");

// parent jobs container
const MainJobsContainer = document.getElementById("full_jobs_container");


// small counter 

const AllJobsCount = document.getElementById("AllJobsCount");
const AllInterviewJobsCount = document.getElementById("AllInterviewJobsCount");
const AllRejectJobsCount = document.getElementById("AllRejectJobsCount");

const all_interview_jobs_count_span = document.getElementById("all_interview_jobs_count");
const all_reject_jobs_count_span = document.getElementById("all_reject_jobs_count");
const total_jobs_span = document.querySelectorAll("#total_jobs");


// This function updates the total job counts based on the given section id.
function CountCardsItem(id) {

    const totalCount = document.querySelector("#All_jobs").children.length;

    if (id == "All_jobs") {
        const AllJobsChild = document.querySelector("#" + id).children.length;
        total_jobs_count.innerText = AllJobsChild;


    } else if (id == "interview_jobs") {
        const AllInterviewJobsChild = InterviewJobsCollection.length;
        total_inteview_jobs_count.innerText = AllInterviewJobsChild;
        all_interview_jobs_count_span.innerText = AllInterviewJobsChild;

    } else if (id == "rejected_jobs") {
        const AllRejectedJobsChild = RejectedJobsCollection.length;
        total_rejected_jobs_count.innerText = AllRejectedJobsChild;
        all_reject_jobs_count_span.innerText = AllRejectedJobsChild;

    }

    const allTotalSpans = document.querySelectorAll("#total_jobs");

    for (let span of allTotalSpans) {
        span.innerText = totalCount;
    }

}

// job section hide show
function JobSectionHideShow(JobSectionId) {

    AllJobsSection.classList.add("hidden");
    AllInterviewJobsSection.classList.add("hidden");
    AllRejectedJobsSection.classList.add("hidden");

    document.getElementById(JobSectionId).classList.remove("hidden");


}



// jobs count function 
function ToogleShow(JobsSectionId, TabingId) {

    CountCardsItem(JobsSectionId);
    EmptyJobDesign();

    AllJobsCount.classList.add("hidden");
    AllInterviewJobsCount.classList.add("hidden");
    AllRejectJobsCount.classList.add("hidden");

    if (JobsSectionId == "All_jobs") {
        AllJobsCount.classList.remove("hidden");
    } else if (JobsSectionId == "interview_jobs") {
        AllInterviewJobsCount.classList.remove("hidden");
    } else if (JobsSectionId == "rejected_jobs") {
        AllRejectJobsCount.classList.remove("hidden");
    }

    // first all tabing class rmeove
    jobsTabingBtn.classList.remove("bg-[#3B82F6]", "px-7", "py-2", "text-[12px]", "text-white");
    interviewjobsTabingBtn.classList.remove("bg-[#3B82F6]", "px-7", "py-2", "text-[12px]", "text-white");
    RejectedjobsTabingBtn.classList.remove("bg-[#3B82F6]", "px-7", "py-2", "text-[12px]", "text-white");

    const ActiveBtn = document.getElementById(TabingId);
    
    ActiveBtn.classList.add("bg-[#3B82F6]", "px-7", "py-2", "text-[12px]", "text-white");



    // section hide show
    JobSectionHideShow(JobsSectionId);

  



}

MainJobsContainer.addEventListener("click", function (event) {


    const CheckBtn = event.target.classList.contains("interview-btn");
    if (CheckBtn) {

        const JobCardNode = event.target.parentNode.parentNode;
  

        // status update
        const JobStatus = JobCardNode.querySelector(".job_status");
        JobStatus.classList.add("text-[#10B981]", "border", "border-[#10B981]");
        JobStatus.innerText = "Interview";

        // border left color update
        JobCardNode.classList.add("border-s-2", "border-[#10B981]");
        // collect info
        const company_name = JobCardNode.querySelector(".company-name").innerText;
        const job_title = JobCardNode.querySelector(".job-title").innerText;
        const job_meta = JobCardNode.querySelector(".job_meta").innerText;
        const job_description = JobCardNode.querySelector(".job_description").innerText;

        const collectObj = {
            company_name,
            job_title,
            job_meta,
            status: "Interview",
            job_description
        }

       

        const CheckExists = InterviewJobsCollection.find(item => item.company_name == company_name);
     
        if (!CheckExists) {

            InterviewJobsCollection.push(collectObj);
            DataRandaring(InterviewJobsCollection, AllInterviewJobsSection, 'border-s-2 border-[#10B981]', 'text-[#10B981] border border-[#10B981]');
            CountCardsItem("interview_jobs");
        


        }


        RejectedJobsCollection = RejectedJobsCollection.filter(item => item.company_name != collectObj.company_name);
        DataRandaring(RejectedJobsCollection, AllRejectedJobsSection, 'border-s-2 border-[#EF4444]', 'text-[#EF4444] border border-[#EF4444]');
        CountCardsItem("rejected_jobs");
      




    } else if (event.target.classList.contains("rejected-btn")) {
        const JobCardNode = event.target.parentNode.parentNode;

        // status update
        const JobStatus = JobCardNode.querySelector(".job_status");
        JobStatus.classList.add("text-[#EF4444]", "border", "border-[#EF4444]");
        JobStatus.innerText = "Rejected";

        // border left color update
        JobCardNode.classList.add("border-s-2", "border-[#EF4444]");
        // collect info
        const company_name = JobCardNode.querySelector(".company-name").innerText;
        const job_title = JobCardNode.querySelector(".job-title").innerText;
        const job_meta = JobCardNode.querySelector(".job_meta").innerText;
        const job_description = JobCardNode.querySelector(".job_description").innerText;

        const collectObj = {
            company_name,
            job_title,
            job_meta,
            status: "Rejected",
            job_description
        }

        
        const CheckExists = RejectedJobsCollection.find(item => item.company_name == company_name);


        // InterviewJobsCollection = [];

        if (!CheckExists) {

            RejectedJobsCollection.push(collectObj);

            DataRandaring(RejectedJobsCollection, AllRejectedJobsSection, 'border-s-2 border-[#EF4444]', 'text-[#EF4444] border border-[#EF4444]');
            CountCardsItem("rejected_jobs");
        }

        InterviewJobsCollection = InterviewJobsCollection.filter(item => item.company_name != collectObj.company_name);
        DataRandaring(InterviewJobsCollection, AllInterviewJobsSection, 'border-s-2 border-[#10B981]', 'text-[#10B981] border border-[#10B981]');
        CountCardsItem("interview_jobs");
        




    } else if (event.target.classList.contains('delete_item')) {
        const JobCardNode = event.target.parentNode.parentNode.parentNode.parentNode;
        const ChildNodeRemove = event.target.parentNode.parentNode.parentNode;

     
        const company_name = ChildNodeRemove.querySelector(".company-name").innerText;
       
        InterviewJobsCollection = InterviewJobsCollection.filter(item=>item.company_name!=company_name);
        RejectedJobsCollection = RejectedJobsCollection.filter(item=>item.company_name!=company_name);

        DataRandaring(InterviewJobsCollection, AllInterviewJobsSection, '', '');
         DataRandaring(RejectedJobsCollection, AllRejectedJobsSection, '', '');
       
         CountCardsItem("interview_jobs");
        CountCardsItem("rejected_jobs");
       
        alert("The item has been removed successfully.");

        JobCardNode.removeChild(ChildNodeRemove);

         CountCardsItem("All_jobs");
    
         EmptyJobDesign();
    
       

    }




});

function DataRandaring(InterviewJobsCollection, AllInterviewJobsSection, DivLeftBorderColor, statusColor) {

    let randerHtml = "";
    for (let data of InterviewJobsCollection) {
        randerHtml += `<div class="jobs-card p-5 rounded shadow-[0_8px_24px_rgba(0,0,0,0.14)] ${DivLeftBorderColor}">
                    <div class="job-header flex justify-between items-center">
                        <div class="job-header-info">
                            <h3 class="company-name text-[#002C5C] text-[18px] font-semibold">${data.company_name}</h3>
                            <p class="job-title text-[#64748B] pt-1">${data.job_title}</p>
                        </div>
                        <div class="job-delete-button">
                            <i class="fa fa-trash text-[#64748B] text-[16px] delete_item"></i>
                        </div>

                    </div>
                    <!-- other basic info  -->
                    <p class="text-[#64748B] pt-4 job_meta">${data.job_meta}</p>
                    <div class="pt-4 space-y-2">
                        <button class="text-[#002C5C] job_status bg-[#EEF4FF] text-[14px] p-2 font-medium rounded ${statusColor}">${data.status}</button>
                        <p class="text-[#323B49] text-[14px] job_description">${data.job_description}</p>
                    </div>

                    <div class="action-btn pt-4">
                        <button 
                            class="text-[#10B981] interview-btn cursor-pointer font-semibold text-[14px] rounded px-3 py-1 border border-[#10B981]">Interview</button>
                        <button 
                            class="text-[#EF4444] rejected-btn cursor-pointer font-semibold text-[14px] rounded px-3 py-1 border border-[#EF4444]">Rejected</button>
                    </div>
                </div>`;
    }


       AllInterviewJobsSection.innerHTML = randerHtml;
   
       EmptyJobDesign();


}

function EmptyJobDesign(){
    
   

    let EmptyHtmlDesign = `
        <div class="no-job flex justify-center items-center min-h-80">
            <div>
                <img class="mx-auto" src="Img/jobs.png" alt="">
                <h2 class="text-center text-[24px] font-semibold text-[#002C5C] pt-4">
                    No jobs available
                </h2>
                <p class="text-[#64748B] text-center">
                    Check back soon for new job opportunities
                </p>
            </div>
        </div>`;

    const AllJobsCountChild = document.querySelector("#All_jobs").children.length;
        

    if (InterviewJobsCollection.length === 0) {
        document.getElementById("interview_jobs").innerHTML = EmptyHtmlDesign;
    }
    
    if(RejectedJobsCollection.length === 0){
    
       document.getElementById("rejected_jobs").innerHTML = EmptyHtmlDesign;
    }
    
    if(AllJobsCountChild===0){

     document.getElementById("All_jobs").innerHTML = EmptyHtmlDesign;
        
    } 
    
    

}


