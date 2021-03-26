# Domain Isolated WebParts

2 Webparts included:

- Call Third Party Api
- Domain Isolated WP
- Edit `package-solution.json`

  ```
  "isDomainIsolated": true,
  "webApiPermissionRequests": [
  {
  "resource": "Microsoft Graph",
  "scope": "User.ReadBasic.All"
  }
  ],
  ```

- Package and deploy the webpart

Approve the API permission request fro Domain Isolated WP:

In the navigation of SharePoint Admin, select Advanced > API access:

![sharepoint-admin-portal-01](_images/sharepoint-admin-portal-01.png)

Select the Pending approval for the Microsoft Graph permission User.ReadBasic.All

![sharepoint-admin-portal-02](_images/sharepoint-admin-portal-02.png)
