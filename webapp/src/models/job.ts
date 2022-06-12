import { AttachmentJob } from "./attachment_job";
import { JobDifficulty } from "./job_difficulty";
import { Organization } from "./organization";
import { Status, StatusEnum } from "./status";
import { Tag } from "./tag";
import { User } from "./user";

export enum JobStatusEnum {
    actived = StatusEnum.actived,
    disabled = StatusEnum.disabled,
    deleted = StatusEnum.deleted,
    coming = StatusEnum.coming,
}

export type JobStatus = Status<keyof typeof JobStatusEnum>;

export interface Job {
    id: string,
    title: string,
    organization: Organization,
    difficulty: JobDifficulty,
    participants: User[],
    participants_max: number,
    address: string,
    cp: number,
    commune: string,
    description?: string,
    start_date: string,
    end_date: string,
    tags: Tag[],
    attachments?: AttachmentJob[],
    qrcode: string,
    status: JobStatus,
    createdAt: string,
    updatedAt: string
}
