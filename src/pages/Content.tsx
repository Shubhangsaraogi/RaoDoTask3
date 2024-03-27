import { FunctionComponent, useState } from "react";
import '../style.css'
const Content: FunctionComponent = () => {
  const [dashboardMenu, setDashboardMenu] = useState(false)
  return (
    <>
      <div className="w-full h-[1530px] relative overflow-hidden tracking-[normal] mq1325:h-auto mq1325:min-h-[1530]">
        {/* Sidebar footer */}
        <div className="absolute top-[994px] left-[21.8px] w-[188px] h-[15.9px] flex flex-row items-start justify-between gap-[20px]">
          <div className="h-3.5 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
            <img
              className="w-[16.3px] h-[12.5px] relative z-[3]"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <img
            className="h-[14.6px] w-[16.2px] relative z-[3]"
            alt=""
            src="/vector-2.svg"
          />
          <img
            className="h-[15.9px] w-[15.9px] relative min-h-[16px] z-[3]"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        {/* Sidebar Dashboard Menu Self implemented dropdown */}
        <div className={`${dashboardMenu ? 'visible' : 'invisible'}`}>
          <div
            className="dropdown absolute h-[1%] w-[4.32%] top-[12.63%] right-[92.33%] bottom-[86.48%] left-[3.35%] max-w-full overflow-hidden max-h-full z-[3]"
          >
            Analytics
          </div>
          <div
            className="dropdown absolute h-[1%] w-[3.59%] top-[14.86%] right-[93.01%] bottom-[84.44%] left-[3.4%] max-w-full overflow-hidden max-h-full z-[3]"
          >Finance</div>
          <div
            className="dropdown absolute h-[1%] w-[5.59%] top-[16.86%] right-[93.01%] bottom-[84.44%] left-[3.4%] max-w-full overflow-hidden max-h-full z-[3]"
          >Job Board</div>
        </div>

        {/* Sidebar other menu items */}
        {/* <div className="sidebar-menu">

          
          <img
            className="absolute h-[3.01%] w-[16.11%] top-[21.96%] right-[83.89%] bottom-[75.03%] left-[0%] max-w-full overflow-hidden max-h-full z-[4]"
            alt=""
            src="/vector-7.svg"
          />
          <img
            className="absolute h-[3.01%] w-[16.11%] top-[24.97%] right-[83.89%] bottom-[72.03%] left-[0%] max-w-full overflow-hidden max-h-full z-[5]"
            alt=""
            src="/vector-7.svg"
          />
          <img
            className="absolute h-[3.01%] w-[16.11%] top-[32.42%] right-[83.89%] bottom-[64.58%] left-[0%] max-w-full overflow-hidden max-h-full z-[2]"
            alt=""
            src="/vector-7.svg"
          />
          <img
            className="absolute h-[3.01%] w-[16.11%] top-[35.42%] right-[83.89%] bottom-[61.57%] left-[0%] max-w-full overflow-hidden max-h-full z-[3]"
            alt=""
            src="/vector-7.svg"
          />
        </div> */}

        <img
          className="absolute h-[1.27%] w-[1.22%] top-[1.65%] right-[11.3%] bottom-[97.07%] left-[87.49%] max-w-full overflow-hidden max-h-full z-[4]"
          alt=""
          src="/vector-12.svg"
        />

        <div className="unlock-premium">

        <div
          className="background-premium-stats absolute h-[8.37%] w-[79.44%] top-[6.41%] right-[2.22%] bottom-[85.23%] left-[18.33%] max-w-full overflow-hidden max-h-full"
        ></div>
        <div
          className="rounded-[30px] absolute bg-white h-[3.01%] w-[9.93%] top-[9.08%] right-[4.72%] bottom-[87.91%] left-[85.35%] max-w-full overflow-hidden max-h-full z-[1]"
        ></div>
        </div>

        <header className="absolute top-[0px] left-[20px] w-[1420px] flex flex-row items-end justify-between gap-[20px] max-w-full">
          <div className="h-[167.7px] w-[100.9px] flex flex-col items-start justify-end pt-0 px-0 pb-[22.5px] box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[61.700000000000045px]">
              <img
                className="self-stretch h-[22.2px] relative max-w-full overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/vector-15.svg"
              />
              <div className="self-stretch flex flex-col items-end justify-start gap-[37.299999999999955px]">
                <div className="h-[9px] flex flex-row items-start justify-end py-0 pr-[1.2000000000000457px] pl-0 box-border">
                  <img
                    className="h-[9px] w-[98.8px] relative z-[2]"
                    alt=""
                    src="/vector-16.svg"
                  />
                </div>
                <div className="self-stretch h-[15px] flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border gap-[11.5px]">
                  <img
                    className="h-[15px] w-[15px] relative min-h-[15px] shrink-0 [debug_commit:f6aba90] z-[3]"
                    alt=""
                    src="/vector-17.svg"
                  />
                  <div className="h-[12.6px] sidebar-heading flex-1 flex flex-col items-start justify-start box-border">
                    Dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!dashboardMenu && <img
            className="dropdown h-[5px] w-2.5 absolute !m-[0] bottom-[27.5px] left-[177.1px] z-[3]"
            alt=""
            src="/vector-19.svg"
            onClick={() => {
              setDashboardMenu(!dashboardMenu);
            }}
          />}
          {dashboardMenu && <img
            className="dropdown h-[5px] w-2.5 absolute !m-[0] bottom-[27.5px] left-[177.1px] z-[3]"
            alt=""
            src="/vector-43.svg"
            onClick={() => {
              setDashboardMenu(!dashboardMenu);
            }}
          />}
          <div className="w-[1208px] flex flex-col items-start justify-start gap-[69.70000000000005px] max-w-full">
            <div className="self-stretch h-[66px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-[1208px] h-[66px] z-[2]"
                alt=""
                src="/vector-20.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] w-[1208px] h-[66px] z-[3]"
                alt=""
                src="/mask-group-2.svg"
              />
              <img
                className="absolute top-[26px] left-[990px] w-4 h-[18px] z-[4]"
                alt=""
                src="/vector-21.svg"
              />
              <img
                className="absolute top-[21.3px] left-[988.7px] w-[6.9px] h-[6.9px] z-[5]"
                alt=""
                src="/vector-22.svg"
              />
              <img
                className="absolute top-[26.2px] left-[1065.5px] w-[17.5px] h-[17.5px] z-[4]"
                alt=""
                src="/vector-23.svg"
              />
              <img
                className="absolute top-[15px] left-[1137px] w-10 h-10 object-cover z-[4]"
                alt=""
                src="/clip-path-group@2x.png"
              />
              <img
                className="absolute top-[15.8px] left-[1137.8px] w-[38.5px] h-[38.5px] z-[5]"
                alt=""
                src="/vector-24.svg"
              />
              <img
                className="absolute top-[45.3px] left-[1167.3px] w-[9.3px] h-[9.3px] z-[6]"
                alt=""
                src="/vector-25.svg"
              />
              <img
                className="absolute top-[45.3px] left-[1167.3px] w-[9.3px] h-[9.3px] z-[7]"
                alt=""
                src="/vector-26.svg"
              />
              <img
                className="absolute top-[10.5px] left-[32.5px] w-[904px] h-[45px] z-[4]"
                alt=""
                src="/vector-27.svg"
              />
              <input
                className="search absolute pl-[48px] top-[10.5px] left-[32.5px] w-[904px] h-[45px] z-[5]"
                alt=""
                src="/vector-28.svg"
              />
              <img
                className="absolute top-[26px] left-[50.9px] w-[13.9px] h-[13.9px] z-[6]"
                alt=""
                src="/vector-29.svg"
              />
              <img
                className="absolute top-[27.7px] left-[76.8px] w-[55.8px] h-[10.5px] z-[6]"
                alt=""
                src="/vector-30.svg"
              />
            </div>
            <div className="w-[1180.7px] h-[55.3px] flex flex-row items-start justify-start py-0 pr-[69px] pl-[68.8px] box-border max-w-full">
              <div className="self-stretch flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                <div className="self-stretch w-[283.6px] flex flex-col items-start justify-start gap-[14.5px]">
                  <div className="h-[27.1px] flex flex-row items-start justify-start py-0 pr-0.5 pl-[1.2px] box-border">
                    <div
                      className="premium-stats h-[27.1px] w-[280.4px] relative z-[1]"
                    >Unlock Premium Stats</div>
                  </div>
                  <div
                    className="premium-stats-desc self-stretch h-[13.7px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                  >Get upto 10TB of storage for a limited time
                  </div>
                </div>
                <div className="w-[83.7px] flex flex-col items-start justify-start pt-[18.8px] px-0 pb-0 box-border">
                  <div className="self-stretch h-[17px] flex flex-row items-start justify-start gap-[9.600000000000025px]">
                    <img
                      className="h-[15px] w-[11.7px] relative shrink-0 [debug_commit:f6aba90] z-[2]"
                      alt=""
                      src="/vector-33.svg"
                    />
                      <div
                      className="self-stretch font-bold h-[20.1px] relative max-w-full overflow-hidden shrink-0 [debug_commit:f6aba90] z-[2]"
                      >Upgrade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="absolute top-[258px] left-[20.9px] flex flex-row items-start justify-start gap-[32px] mq1325:flex-wrap">
          <div className="h-[216.2px] w-[146.3px] flex flex-col items-start justify-start pt-[3.8px] px-0 pb-0 box-border">
            <div className="w-[115.7px] flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[52.4px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[1.2px]">
                <div className="flex-1 flex flex-col items-end justify-start gap-[34.4px]">
                  <div className="h-[10.3px] flex flex-row items-start justify-end py-0 pr-[1.1px] pl-px box-border">
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[30.7px] shrink-0 [debug_commit:f6aba90]">
                    <div className="self-stretch h-[14.5px] flex flex-row items-start justify-start gap-[10.6px]">
                      <img
                        className="h-[12.9px] w-[16.3px] relative shrink-0 [debug_commit:f6aba90] z-[4]"
                        alt=""
                        src="/vector-36.svg"
                      />
                      <div className="h-[14.5px] flex-1 flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0 box-border">
                        <img
                          className="self-stretch h-[13.2px] relative max-w-full overflow-hidden shrink-0 [debug_commit:f6aba90] z-[4]"
                          alt=""
                          src="/vector-37.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[77.9px] flex flex-row items-start justify-start py-0 pr-0.5 pl-[1.9px] box-border">
                      <div className="h-[15.3px] flex-1 flex flex-row items-start justify-start gap-[13.8px]">
                        <img
                          className="h-[15.3px] w-[11.2px] relative min-h-[15px] z-[5]"
                          alt=""
                          src="/vector-38.svg"
                        />
                        <div className="h-[12.4px] flex-1 flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0 box-border">
                          <img
                            className="self-stretch h-[10.8px] relative max-w-full overflow-hidden shrink-0 z-[5]"
                            alt=""
                            src="/vector-39.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[59.8px] h-[15.1px] relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-[14.6px] h-[14.6px] z-[6]"
                        alt=""
                        src="/vector-40.svg"
                      />
                      <img
                        className="absolute top-[2.1px] left-[25.4px] w-[34.4px] h-[13px] z-[6]"
                        alt=""
                        src="/vector-41.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="w-[51px] h-[9px] relative z-[2]"
                alt=""
                src="/vector-42.svg"
              />
            </div>
          </div>
          <div className="h-[149.5px] flex flex-col items-start justify-start pt-[52.5px] pb-0 pr-[22.8px] pl-0 box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[41px]">
              <img
                className="w-2.5 h-[5px] relative z-[4]"
                alt=""
                src="/vector-43.svg"
              />
              <img
                className="w-2.5 h-[5px] relative z-[5]"
                alt=""
                src="/vector-43.svg"
              />
              <img
                className="w-2.5 h-[5px] relative z-[6]"
                alt=""
                src="/vector-43.svg"
              />
            </div>
          </div>
          <div className="h-[162px] w-[262px] relative flex items-center justify-center">
            <div
              className="card h-full w-[93%] object-contain absolute left-[0px] top-[1px] [transform:scale(1.123)]"
            >
              <div className="title">
                <h3>Revenue</h3>
                <div className="number">
                  $56,789
                </div>
              </div>

              <div className="card-footer">
                <div className="green-chip">
                  +45%
                </div>
                <div className="grey-text">
                  From 4.6%
                </div>
              </div>
            </div>
          </div>
          <div className="h-[162px] w-[262px] relative flex items-center justify-center">
            <div
              className="card h-full w-[93%] object-contain absolute left-[0px] top-[1px] [transform:scale(1.123)]"
            >
              <div className="title">
                <h3>Users</h3>
                <div className="number">
                  76.8%
                </div>
              </div>

              <div className="card-footer">
                <div className="green-chip red-chip">
                  -1.7%
                </div>
                <div className="grey-text">
                  From 4.6%
                </div>
              </div>
            </div>
          </div>
          <div className="h-[162px] w-[262px] relative flex items-center justify-center">
            <div
              className="card h-full w-[93%] object-contain absolute left-[0px] top-[1px] [transform:scale(1.123)]"
            >
              <div className="title">
                <h3>New Signups</h3>
                <div className="number">
                  116
                </div>
              </div>

              <div className="card-footer">
                <div className="green-chip grey-chip">
                  0.00
                </div>

              </div>
            </div>
          </div>
          <div className="h-[162px] w-[262px] relative flex items-center justify-center">
            <div
              className="card h-full w-[93%] object-contain absolute left-[0px] top-[1px] [transform:scale(1.123)]"
            >
              <div className="title">
                <h3>Retention</h3>
                <div className="number">
                  12.67%
                </div>
              </div>

              <div className="card-footer">
                <div className="green-chip">
                  +0.5%
                </div>
                <div className="grey-text">
                  From 4.6%
                </div>
              </div>
            </div>
          </div>
        </section>
        <img
          className="absolute h-[29.93%] w-[79.44%] top-[29.54%] right-[2.22%] bottom-[40.52%] left-[18.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-46.svg"
        />
        <img
          className="absolute h-[4.05%] w-[79.44%] top-[29.54%] right-[2.22%] bottom-[66.41%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/vector-47.svg"
        />
        <img
          className="absolute h-[4.05%] w-[79.44%] top-[29.54%] right-[2.22%] bottom-[66.41%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[2]"
          alt=""
          src="/mask-group-3.svg"
        />
        <div className="absolute top-[475px] left-[289.3px] w-[1083.7px] h-4 flex flex-row items-end justify-between gap-[20px] max-w-full">
          <img
            className="h-[13.9px] w-[110.7px] relative z-[3]"
            alt=""
            src="/vector-48.svg"
          />
          <img
            className="h-4 w-0.5 relative min-h-[16px] z-[3]"
            alt=""
            src="/vector-49.svg"
          />
        </div>
        <img
          className="absolute h-[0.59%] w-[0.42%] top-[51.71%] right-[79.53%] bottom-[47.7%] left-[20.05%] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/vector-50.svg"
        />
        <div className="absolute top-[817px] left-[341.9px] w-[1041.5px] flex flex-row items-end justify-between gap-[20px] max-w-full mq450:flex-wrap mq450:justify-center">
          <img
            className="h-[9px] w-5 relative z-[1]"
            alt=""
            src="/vector-51.svg"
          />
          <img
            className="h-[8.9px] w-[22.9px] relative z-[1]"
            alt=""
            src="/vector-52.svg"
          />
          <img
            className="h-[8.9px] w-[19.6px] relative z-[1]"
            alt=""
            src="/vector-53.svg"
          />
          <img
            className="h-[8.9px] w-[23.9px] relative z-[1]"
            alt=""
            src="/vector-54.svg"
          />
          <img
            className="h-[8.8px] w-[20.3px] relative z-[1]"
            alt=""
            src="/vector-55.svg"
          />
          <img
            className="h-[9px] w-[12.5px] relative z-[1] mq450:w-full mq450:h-[12.5px]"
            alt=""
            src="/vector-56.svg"
          />
          <img
            className="h-[9px] w-[17.6px] relative z-[1] mq450:w-full mq450:h-[17.6px]"
            alt=""
            src="/vector-57.svg"
          />
        </div>
        <img
          className="absolute h-[8.85%] w-[72.43%] top-[35.69%] right-[3.89%] bottom-[55.46%] left-[23.68%] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/vector-58.svg"
        />
        <section className="absolute top-[511.5px] left-[22.5px] w-[1361.5px] flex flex-row flex-wrap items-start justify-start gap-[64.3px] max-w-full">
          <div className="w-[112.4px] flex flex-col items-start justify-start gap-[31.4px]">
            <div className="h-[15.4px] flex flex-row items-end justify-start py-0 pr-1.5 pl-0 box-border gap-[11.5px]">
              <img
                className="h-[15px] w-[15px] relative z-[3]"
                alt=""
                src="/vector-59.svg"
              />
              <img
                className="h-[13.2px] w-[79.6px] relative z-[3]"
                alt=""
                src="/vector-60.svg"
              />
            </div>
            <div className="self-stretch h-[14.7px] flex flex-row items-start justify-start gap-[11.5px]">
              <img
                className="h-[12.5px] w-[15px] relative shrink-0 [debug_commit:f6aba90] z-[4]"
                alt=""
                src="/vector-61.svg"
              />
              <div className="h-[14.7px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <img
                  className="self-stretch h-[13.7px] relative max-w-full overflow-hidden shrink-0 [debug_commit:f6aba90] z-[4]"
                  alt=""
                  src="/vector-62.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[770px] max-w-full mq1125:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[79.5px] max-w-full mq1125:flex-wrap">
              <div className="h-[51px] w-2.5 relative">
                <img
                  className="absolute top-[0px] left-[0px] w-2.5 h-[5px] z-[3]"
                  alt=""
                  src="/vector-43.svg"
                />
                <img
                  className="absolute top-[46px] left-[0px] w-2.5 h-[5px] z-[4]"
                  alt=""
                  src="/vector-43.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[29.5px] px-0 pb-0 box-border min-w-[712px] max-w-full mq800:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[31px] max-w-full mq1125:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[5.2px] px-0 pb-0">
                    <div className="h-[189px] flex flex-col items-start justify-start pt-0 px-0 pb-[60px] box-border gap-[51px]">
                      <img
                        className="w-[21.3px] h-[9px] relative z-[1]"
                        alt=""
                        src="/vector-65.svg"
                      />
                      <img
                        className="w-[21px] h-[9px] relative z-[1]"
                        alt=""
                        src="/vector-66.svg"
                      />
                      <img
                        className="w-[20.6px] h-[9px] relative z-[1]"
                        alt=""
                        src="/vector-67.svg"
                      />
                      <img
                        className="w-[19.1px] h-[9px] relative z-[1]"
                        alt=""
                        src="/vector-68.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="h-60 flex-1 relative max-w-full overflow-hidden min-w-[678px] z-[2] mq800:min-w-full"
                    alt=""
                    src="/vector-69.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <img
          className="absolute h-[10.48%] w-[72.43%] top-[40.9%] right-[3.89%] bottom-[48.63%] left-[23.68%] max-w-full overflow-hidden max-h-full z-[3]"
          alt=""
          src="/vector-70.svg"
        />
        <img
          className="absolute h-[7.11%] w-[72.43%] top-[40.9%] right-[3.89%] bottom-[51.99%] left-[23.68%] max-w-full overflow-hidden max-h-full z-[4]"
          alt=""
          src="/vector-71.svg"
        />
        <div className="absolute top-[869px] left-[734px] flex flex-row items-start justify-start gap-[33.099999999999994px]">
          <div className="h-3.5 flex flex-row items-start justify-start gap-[9.200000000000005px]">
            <img className="h-3 w-3 relative z-[1]" alt="" src="/vector-72.svg" />
            <img
              className="h-[13.2px] w-[63.7px] relative z-[1]"
              alt=""
              src="/vector-73.svg"
            />
          </div>
          <div className="h-3 flex flex-row items-end justify-start gap-[9.2px]">
            <img
              className="h-3 w-3 relative min-h-[12px] z-[1]"
              alt=""
              src="/vector-74.svg"
            />
            <img
              className="h-[10.4px] w-[63.7px] relative z-[1]"
              alt=""
              src="/vector-75.svg"
            />
          </div>
        </div>
        <img
          className="absolute h-[38.43%] w-[79.44%] top-[61.57%] right-[2.22%] bottom-[0%] left-[18.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-76.svg"
        />
        <img
          className="absolute h-[4.05%] w-[79.44%] top-[61.57%] right-[2.22%] bottom-[34.38%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/vector-47.svg"
        />
        <img
          className="absolute h-[4.05%] w-[79.44%] top-[61.57%] right-[2.22%] bottom-[34.38%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[2]"
          alt=""
          src="/mask-group-3.svg"
        />
        <div className="absolute top-[965px] left-[289.3px] w-[1083.7px] h-[18.7px] flex flex-row items-start justify-between gap-[20px] max-w-full">
          <div className="h-[18.7px] w-[119.5px] flex flex-col items-start justify-start pt-[1.9000000000000057px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[16.8px] relative max-w-full overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/vector-78.svg"
            />
          </div>
          <img className="h-4 w-0.5 relative z-[3]" alt="" src="/vector-79.svg" />
        </div>
        <img
          className="absolute h-[3.53%] w-[79.44%] top-[65.62%] right-[2.22%] bottom-[30.85%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[3]"
          alt=""
          src="/vector-80.svg"
        />
        <div className="absolute top-[1025.5px] left-[288.8px] w-[1014.8px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap mq450:justify-center">
          <img
            className="h-[10.5px] w-[44.9px] relative z-[4]"
            alt=""
            src="/vector-81.svg"
          />
          <img
            className="h-[10.3px] w-[50.5px] relative z-[4]"
            alt=""
            src="/vector-82.svg"
          />
          <img
            className="h-[10.5px] w-[41px] relative z-[4]"
            alt=""
            src="/vector-83.svg"
          />
          <img
            className="h-[10.4px] w-[46.7px] relative z-[4]"
            alt=""
            src="/vector-84.svg"
          />
          <img
            className="h-[10.7px] w-[42.5px] relative z-[4]"
            alt=""
            src="/vector-85.svg"
          />
          <img
            className="h-[13.2px] w-[38.8px] relative min-h-[13px] z-[4]"
            alt=""
            src="/vector-86.svg"
          />
        </div>
        <img
          className="absolute h-[4.97%] w-[79.44%] top-[69.15%] right-[2.22%] bottom-[25.88%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[4]"
          alt=""
          src="/vector-87.svg"
        />
        <img
          className="absolute h-[4.97%] w-[79.44%] top-[69.15%] right-[2.22%] bottom-[25.88%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[5]"
          alt=""
          src="/mask-group-5.svg"
        />
        <img
          className="absolute h-[1.57%] w-[3.96%] top-[70.85%] right-[48.61%] bottom-[27.58%] left-[47.43%] max-w-full overflow-hidden max-h-full z-[6]"
          alt=""
          src="/vector-88.svg"
        />
        <img
          className="absolute h-[4.97%] w-[79.44%] top-[74.12%] right-[2.22%] bottom-[20.92%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[6]"
          alt=""
          src="/vector-87.svg"
        />
        <img
          className="absolute h-[4.97%] w-[79.44%] top-[74.12%] right-[2.22%] bottom-[20.92%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[7]"
          alt=""
          src="/mask-group-5.svg"
        />
        <img
          className="absolute h-[0.76%] w-[3.19%] top-[76.26%] right-[48.61%] bottom-[22.97%] left-[48.2%] max-w-full overflow-hidden max-h-full z-[9]"
          alt=""
          src="/vector-90.svg"
        />
        <img
          className="absolute h-[4.97%] w-[79.44%] top-[79.08%] right-[2.22%] bottom-[15.95%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[8]"
          alt=""
          src="/vector-87.svg"
        />
        <img
          className="absolute h-[4.97%] w-[79.44%] top-[79.08%] right-[2.22%] bottom-[15.95%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[9]"
          alt=""
          src="/mask-group-5.svg"
        />
        <img
          className="absolute h-[1.57%] w-[5.49%] top-[80.78%] right-[47.08%] bottom-[17.65%] left-[47.43%] max-w-full overflow-hidden max-h-full z-[10]"
          alt=""
          src="/vector-92.svg"
        />
        <img
          className="absolute h-[4.97%] w-[79.44%] top-[84.05%] right-[2.22%] bottom-[10.98%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[10]"
          alt=""
          src="/vector-87.svg"
        />
        <img
          className="absolute h-[4.97%] w-[79.44%] top-[84.05%] right-[2.22%] bottom-[10.98%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[11]"
          alt=""
          src="/mask-group-5.svg"
        />
        <img
          className="absolute h-[1.57%] w-[3.96%] top-[85.75%] right-[48.61%] bottom-[12.68%] left-[47.43%] max-w-full overflow-hidden max-h-full z-[12]"
          alt=""
          src="/vector-88.svg"
        />
        <img
          className="absolute h-[4.97%] w-[79.44%] top-[89.02%] right-[2.22%] bottom-[6.01%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[12]"
          alt=""
          src="/vector-87.svg"
        />
        <img
          className="absolute h-[4.97%] w-[79.44%] top-[89.02%] right-[2.22%] bottom-[6.01%] left-[18.33%] max-w-full overflow-hidden max-h-full z-[13]"
          alt=""
          src="/mask-group-5.svg"
        />
        <section className="absolute top-[1074px] left-[288px] w-[1041px] flex flex-row items-end justify-between gap-[20px] max-w-full mq800:flex-wrap">
          <div className="w-[108.9px] flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch h-11 flex flex-row items-end justify-start py-0 pr-[3px] pl-0 box-border gap-[12.800000000000011px]">
              <div className="h-11 w-11 relative z-[6] flex items-center justify-center">
                <img
                  className="h-full w-full z-[6] object-contain absolute left-[0px] top-[1px] [transform:scale(1.477)]"
                  alt=""
                  src="/group-4.svg"
                />
              </div>
              <div className="h-[27.7px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[14.199999999999989px] box-border">
                <img
                  className="self-stretch h-[13.5px] relative max-w-full overflow-hidden shrink-0 z-[6]"
                  alt=""
                  src="/vector-96.svg"
                />
              </div>
            </div>
            <div className="h-11 flex flex-row items-end justify-start py-0 pr-[13px] pl-0 box-border gap-[13px]">
              <div className="h-11 w-11 relative z-[8] flex items-center justify-center">
                <img
                  className="h-full w-full z-[8] object-contain absolute left-[0px] top-[1px] [transform:scale(1.477)]"
                  alt=""
                  src="/group-5.svg"
                />
              </div>
              <div className="h-[27.7px] flex flex-col items-start justify-end pt-0 px-0 pb-3.5 box-border">
                <img
                  className="w-[39.3px] h-[13.7px] relative z-[8]"
                  alt=""
                  src="/vector-97.svg"
                />
              </div>
            </div>
            <div className="h-11 flex flex-row items-start justify-start py-0 pr-[19px] pl-0 box-border gap-[13px]">
              <div className="h-11 w-11 relative z-[10] flex items-center justify-center">
                <img
                  className="h-full w-full z-[10] object-contain absolute left-[0px] top-[1px] [transform:scale(1.477)]"
                  alt=""
                  src="/group-6.svg"
                />
              </div>
              <div className="h-[27.1px] flex flex-col items-start justify-start pt-[16.80000000000001px] px-0 pb-0 box-border">
                <img
                  className="w-[32.5px] h-[10.3px] relative z-[10]"
                  alt=""
                  src="/vector-98.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-11 flex flex-row items-end justify-start gap-[12.300000000000011px]">
              <div className="h-11 w-11 relative z-[12] flex items-center justify-center">
                <img
                  className="h-full w-full z-[12] object-contain absolute left-[0px] top-[1px] [transform:scale(1.477)]"
                  alt=""
                  src="/group-7@2x.png"
                />
              </div>
              <div className="h-[27.2px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3.5 box-border">
                <img
                  className="self-stretch h-[13.2px] relative max-w-full overflow-hidden shrink-0 z-[12]"
                  alt=""
                  src="/vector-99.svg"
                />
              </div>
            </div>
            <div className="h-11 flex flex-row items-start justify-start py-0 pr-[27px] pl-0 box-border gap-[12.300000000000011px]">
              <div className="h-11 w-11 relative z-[14] flex items-center justify-center">
                <img
                  className="h-full w-full z-[14] object-contain absolute left-[0px] top-[1px] [transform:scale(1.477)]"
                  alt=""
                  src="/group-8@2x.png"
                />
              </div>
              <div className="h-[27.1px] flex flex-col items-start justify-start pt-[16.799999999999955px] px-0 pb-0 box-border">
                <img
                  className="w-[26px] h-[10.3px] relative z-[14]"
                  alt=""
                  src="/vector-100.svg"
                />
              </div>
            </div>
          </div>
          <div className="h-[331.3px] w-[112.3px] flex flex-col items-start justify-end pt-0 px-0 pb-[16.799999999999955px] box-border">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[65.50000000000001px]">
              <img
                className="w-[44.9px] h-[10.5px] relative z-[6]"
                alt=""
                src="/vector-101.svg"
              />
              <img
                className="w-[45.2px] h-[10.5px] relative z-[8]"
                alt=""
                src="/vector-102.svg"
              />
              <img
                className="w-[41.9px] h-[10.5px] relative z-[10]"
                alt=""
                src="/vector-103.svg"
              />
              <img
                className="w-[36.7px] h-[10.5px] relative z-[12]"
                alt=""
                src="/vector-104.svg"
              />
              <img
                className="w-[45.1px] h-[10.5px] relative z-[14]"
                alt=""
                src="/vector-105.svg"
              />
            </div>
          </div>
          <div className="h-[331.2px] w-[104.8px] flex flex-col items-start justify-end pt-0 pb-2.5 pr-[36.800000000000026px] pl-0 box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[59.54999999999998px]">
              <div className="h-[9.3px] flex flex-row items-start justify-start py-0 pr-2.5 pl-[10.300000000000011px] box-border">
                <img
                  className="h-[9.3px] w-[36.1px] relative z-[7]"
                  alt=""
                  src="/vector-106.svg"
                />
              </div>
              <img
                className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0 z-[8]"
                alt=""
                src="/vector-107.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[66.60000000000002px]">
                <img
                  className="w-[56.6px] h-[9px] relative z-[11]"
                  alt=""
                  src="/vector-108.svg"
                />
                <div className="self-stretch flex-1 flex flex-row items-start justify-end py-0 pr-[10.699999999999989px] pl-0">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[59.89999999999998px]">
                    <div className="h-[9.3px] flex flex-row items-start justify-start py-0 pr-[11px] pl-[10.300000000000011px] box-border">
                      <img
                        className="h-[9.3px] w-[36.1px] relative z-[13]"
                        alt=""
                        src="/vector-106.svg"
                      />
                    </div>
                    <img
                      className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0 z-[14]"
                      alt=""
                      src="/vector-88.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[331.3px] w-[110px] flex flex-col items-start justify-end pt-0 px-0 pb-[16.799999999999955px] box-border">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[65.50000000000001px]">
              <img
                className="w-[46.5px] h-[10.5px] relative z-[6]"
                alt=""
                src="/vector-111.svg"
              />
              <img
                className="w-[40.7px] h-[10.5px] relative z-[8]"
                alt=""
                src="/vector-112.svg"
              />
              <img
                className="w-[41.9px] h-[10.5px] relative z-[10]"
                alt=""
                src="/vector-113.svg"
              />
              <img
                className="w-[37.1px] h-[10.5px] relative z-[12]"
                alt=""
                src="/vector-114.svg"
              />
              <img
                className="w-[40.7px] h-[10.5px] relative z-[14]"
                alt=""
                src="/vector-115.svg"
              />
            </div>
          </div>
          <div className="h-[331.3px] w-[106.3px] flex flex-col items-start justify-end pt-0 px-0 pb-[16.799999999999955px] box-border">
            <div className="w-[77.9px] flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[65.63333333333334px]">
              <img
                className="w-[52.7px] h-[10.5px] relative z-[6]"
                alt=""
                src="/vector-116.svg"
              />
              <img
                className="w-[30.8px] h-[10.3px] relative z-[8]"
                alt=""
                src="/vector-117.svg"
              />
              <img
                className="w-[39.1px] h-[10.4px] relative z-[10]"
                alt=""
                src="/vector-118.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[62.900000000000034px]">
                <img
                  className="self-stretch h-[13px] relative max-w-full overflow-hidden shrink-0 z-[12]"
                  alt=""
                  src="/vector-119.svg"
                />
                <img
                  className="w-[52.7px] h-[10.5px] relative z-[14]"
                  alt=""
                  src="/vector-116.svg"
                />
              </div>
            </div>
          </div>
          <div className="h-[331.5px] w-[64.2px] flex flex-col items-start justify-end pt-0 px-0 pb-[16.799999999999955px] box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[62.5px]">
              <img
                className="w-[43.3px] h-[13.5px] relative z-[6]"
                alt=""
                src="/vector-121.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[65.30000000000001px]">
                <img
                  className="w-[49.8px] h-[10.7px] relative z-[8]"
                  alt=""
                  src="/vector-122.svg"
                />
                <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[62.5px]">
                  <img
                    className="w-[45.4px] h-[13.5px] relative z-[10]"
                    alt=""
                    src="/vector-123.svg"
                  />
                  <img
                    className="self-stretch h-[13.5px] relative max-w-full overflow-hidden shrink-0 z-[12]"
                    alt=""
                    src="/vector-124.svg"
                  />
                  <img
                    className="w-[49.8px] h-[10.7px] relative z-[14]"
                    alt=""
                    src="/vector-122.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <img
          className="absolute h-[0.61%] w-[2.51%] top-[91.16%] right-[49.35%] bottom-[8.23%] left-[48.15%] max-w-full overflow-hidden max-h-full z-[15]"
          alt=""
          src="/vector-106.svg"
        />
        <div className="absolute top-[1476px] left-[781.2px] flex flex-row items-start justify-start gap-[20.249999999999996px]">
          <div className="h-4 w-[18.7px] relative">
            <img
              className="absolute top-[8px] left-[0px] w-[18.7px] h-0.5 z-[1]"
              alt=""
              src="/vector-127.svg"
            />
            <img
              className="absolute top-[8px] left-[0px] w-2 h-2 z-[2]"
              alt=""
              src="/vector-128.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-2 h-2 z-[3]"
              alt=""
              src="/vector-129.svg"
            />
          </div>
          <div className="h-[17px] flex flex-col items-start justify-start pt-[1.2999999999999543px] px-0 pb-0 box-border">
            <img
              className="w-[31.8px] h-[15.7px] relative z-[1]"
              alt=""
              src="/vector-130.svg"
            />
          </div>
          <div className="h-4 w-[18.7px] relative">
            <img
              className="absolute top-[8px] left-[0px] w-[18.7px] h-0.5 z-[1]"
              alt=""
              src="/vector-127.svg"
            />
            <img
              className="absolute top-[8px] left-[10.6px] w-2 h-2 z-[2]"
              alt=""
              src="/vector-132.svg"
            />
            <img
              className="absolute top-[0px] left-[10.6px] w-2 h-2 z-[3]"
              alt=""
              src="/vector-133.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
