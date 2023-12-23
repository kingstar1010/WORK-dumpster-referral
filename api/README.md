## Backend

Backend is pretty straight forward

* Make sure to setup all the environment variables mentioned in .env.example at the root of the project
* Also setup AWS environment variables so that it can login to AWS
  * `YDGDR_AWS_REGION`, `YDGDR_AWS_ACCESS_KEY_ID` and `YDGDR_AWS_SECRET_ACCESS_KEY` because the normal ones are reserved by Vercel
* Currently this uses the `ydgdr_from_vercel` user in IAM
  * It's configured with permissions to send with SES
  * It's configured with access to the lambda to ... can we just tunnel the traffic
* Requires that the domain be active for prod, and also uses the dev domain for linking to public assets
* Requires a proxy inside of Lambda with the EIP setup to allow calls to Elavon with a static IP