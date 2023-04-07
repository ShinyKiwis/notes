# Wireless Connection 
## How to connect with ssid and passphrase/password 
Void Linux provide a cli tool called `wpa_cli` to connect to the wireless access point (AP).
Here are the steps of connecting to an AP:
```bash
> scan on 
> scan_results  # To see the information of scanned AP 
> add_network 0 # Remember to add the network before config it
> set_network 0 ssid "<name of AP>"
> set_network 0 psk  "<password>"
# In case, the authetication process doesn't run automatically
> enable_network 0
```

## How to connect with ssid and a provided account and password (HCMUT01)?
> 03/04/2023 - I doubt that the password parameter might change since this is what the university using!
```bash
# We need to add the network again but this time with 2 additional information 
> set_network X identity "<account_name>"
> set_network X password "<password>"
> set_network X psk "secrectpassword" 
# The purpose of this is to set psk as a valid password but we don't need this for authentication
```

## How to add the network configuration permanently ?
Edit the `/etc/wpa_supplicant/wpa_supplicant.conf`, add another `network` block to the configuration file.
