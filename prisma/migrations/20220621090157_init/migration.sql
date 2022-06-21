-- CreateTable
CREATE TABLE "UserPlanInvited" (
    "user_id" INTEGER NOT NULL,
    "plan_id" INTEGER NOT NULL,
    "invited_status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserPlanInvited_pkey" PRIMARY KEY ("user_id","plan_id")
);

-- AddForeignKey
ALTER TABLE "UserPlanInvited" ADD CONSTRAINT "UserPlanInvited_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPlanInvited" ADD CONSTRAINT "UserPlanInvited_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
