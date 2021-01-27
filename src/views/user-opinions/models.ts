import { OpinionResponse } from "../../api/services/opinions/models";

export interface PaginationProps {
  opinionsOnPage: number;
  totalOpinions: number;
  paginate(pageNumber: number): void;
}

export interface OpinionsProps {
  opinions: OpinionResponse[];
  loading: boolean;
}
