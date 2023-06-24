
// UI for vendor submit license as well as the evidence
// for whatever service they provide
export function VendorUI() {
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