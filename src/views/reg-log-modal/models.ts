export interface ModalProps {
  onClose(): void;
}

export interface FormModel {
  loginUsername: string;
  loginPassword: string;
  regName: string;
  regEmail: string;
  regPassword: string;
  regPasswordRepeat: string;
  loginUsernameError: string;
  loginPasswordError: string;
}
