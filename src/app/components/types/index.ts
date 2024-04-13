export interface OfficeLine {
  waiting: number;
  elapsed: number;
}

export interface Office {
  id: number;
  name: string;
  online: boolean;
  lines: OfficeLine[];
}

export interface OfficesResponse {
  status(arg0: string, status: any): unknown;
  ok: any;
  offices: Office[]
}

export interface Props {
  id: number;
  search: string;
  onChange: (value: string) => void;
  office?: Office;
  onClick: (id: number) => void;
  className: string;
}

export type UseFetchReturnType<T> = {
  fetcher: <U>(url: string) => Promise<U>;
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export interface Response<T> {
  json(): Promise<T>
}

export type OfficeListProps = {
  offices: Office[];
  onClick: (id: number) => void;
};

export interface OfficeItemProps {
  key: number;
  office: Office;
}
