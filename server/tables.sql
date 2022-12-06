CREATE TABLE  public.users (
  "_id" serial NOT NULL,
  "username" varchar(20) NOT NULL UNIQUE,
  "password" varchar(20) NOT NULL,
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE  
);