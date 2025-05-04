import NavBar from "@/Components/ServerComponents/NavBar";


function DownloadSoftware() {

}


export default function Download() {
    return (
        <>
        <NavBar/>
        <main className=" min-w-fit bg-slate-700 flex flex-col items-center w-full h-lvh pb-32 gap-36">
            <div className="flex flex-col w-full items-center text-center mt-20">
                <h1 className=" text-fuchsia-500 text-6xl font-mono font-bold">Download X-Treme Budget Software</h1>
            </div>

            <a
                href="/ExtremeBudgetSoftwareNickWatts.exe"
                download
                className="bg-green-500 rounded-xl font-mono p-2 text-3xl"
            >
                Download
            </a>
            <p className=" w-1/2 text-emerald-700">THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
        </main>
        </>
    )
}