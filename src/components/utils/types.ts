export type ModelList = {
    userId: string;
    id: string;
    title: string;
    body : string;
  };

  export type ModelListState = {
    AllModelsData: {
      pending: boolean;
      fulfilled: boolean;
      rejected: boolean;
      data: ModelList | null;
    }
  }

  export type ConfirmationList = {
    userId: string;
    id: string;
    title: string;
    body : string;
  };

  export type ConfirmationlListState = {
    AllModelsData: {
      pending: boolean;
      fulfilled: boolean;
      rejected: boolean;
      data: ConfirmationList | null;
    }
  }

  export type OutputDataList = {
    userId: string;
    id: string;
    title: string;
    body : string;
  };

  export type OutputDataState = {
    AllOutputData: {
      pending: boolean;
      fulfilled: boolean;
      rejected: boolean;
      data: OutputDataList | null;
    }
  }

  export type InputDataList = {
    userId: string;
    id: string;
    title: string;
    body : string;
  };

  export type InputDataState = {
    AllOutputData: {
      pending: boolean;
      fulfilled: boolean;
      rejected: boolean;
      data: InputDataList | null;
    }
  }


  