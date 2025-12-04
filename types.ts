export interface StudentFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  birthDate: string;
  email: string;
  phoneNumber: string;
  address: string;
  course: CourseEnum;
  yearLevel: string;
  statementOfPurpose: string;
}

export enum CourseEnum {
  NONE = "",
  BSIT = "Bachelor of Science in Information Technology",
  BSCS = "Bachelor of Science in Computer Science",
  BSCPE = "Bachelor of Science in Computer Engineering",
  BSBA = "Bachelor of Science in Business Administration",
  BEED = "Bachelor of Elementary Education",
  BSED = "Bachelor of Secondary Education"
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
