import { FC } from "react";
import flowpng from "../../assets/flow.png";
import { DesignPageWrapper, Heading } from "./DesignPage.styled";
import Loader from "../../assets/ask-question.mp4";

interface DesignPageProps {}

const DesignPage: FC<DesignPageProps> = () => (
  <DesignPageWrapper>
    <div className="container">
      <Heading  className="text-start">Overview</Heading>
      <p className="text-start">
        Retrieval Augmented Generation (RAG) builds on a LLM (Large Language
        Model) in a way that it references a specific knowledge base (famous
        speeches PDFs in this case) before returning a response, i.e. giving a
        chatbot relevant context of a particular subject that it'll use to
        generate a response to a user's question with.
      </p>
      <p className="text-start">
        This repo just handles the provisioning of Azure resources using Bicep,
        and then copies the seed daata into the Blob store. This data is used to
        seed Azure AI Search with help from the embedding model.
      </p>
      <Heading className="text-start">Flowchart</Heading>
      <img src={flowpng} alt="Flowchart" className="img-fluid" />
      <Heading className="text-start">Demo</Heading>
      <video autoPlay loop muted>
        <source src={Loader} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </DesignPageWrapper>
);

export default DesignPage;
