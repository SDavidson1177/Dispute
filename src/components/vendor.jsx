// Import necessary packages
import { HttpJsonRpcConnector, LotusClient } from "filecoin.js";
import {useEffect} from 'react'

// Use the local node URL to create a connection to your Lotus node
const localNodeUrl = "/rpc/v0";
const localConnector = new HttpJsonRpcConnector({ url: localNodeUrl });

// // lotusClient exposes all Lotus APIs
const lotusClient = new LotusClient(localConnector);

// UI for vendor submit license as well as the evidence
// for whatever service they provide
export function VendorUI() {
    const getVersion = async () => {
        let version;
        try {
            version = await lotusClient.common.version();
        } catch (e) {

        }
        console.log(version);
    }
    
    useEffect(() => {
        getVersion();
    });

    return(
        <>
            <h1>Vendor UI</h1>
            <div id="submit-license">
                <h2>Submit License For Verification</h2>
                <form>
                    <input type="file"
                        id="license" name="license"
                        accept="image/png, image/jpeg">
                    </input>
                </form>
            </div>
            <div id="submit-evidence">
                <h2>Submit Evidence of Work</h2>
                <form>
                    <input type="file"
                        id="evidence" name="evidence"
                        accept="image/png, image/jpeg">
                    </input>
                    <label> Client Address
                        <input type="text"></input>
                    </label>
                </form>
            </div>
        </>
    );
}