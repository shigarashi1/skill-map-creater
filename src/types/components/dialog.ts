type TBaseDialog = {
  hasOpen: boolean;
  close: () => void;
  title: string;
  context: string;
};

export type TInfoDialog = TBaseDialog & {
  lists?: string[];
  ok?: () => void;
};

export type TOkCancelDialog = TBaseDialog & {
  ok: () => void;
  cancel: () => void;
};

export type TYesNoDialog = TBaseDialog & {
  yes: () => void;
  no: () => void;
};
