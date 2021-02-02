import React from "react";

export default function Datatable({data}) {

    if(data && data.success === true) {
        const firstObj = data.data[0]
          return (
           <div>
                  <table className="table table-bordered table-dark table-hover table-condensed" >
                      <thead>
                          <tr className="table-danger" >
                              {Object.keys(firstObj).map(key => {
                                  return (
                                      <td>
                                          {key}
                                     </td>
                                  )
                              })}
                          </tr>
                      </thead>
                      <tbody>
                          {data.data.map(project_data => {
                              return (
                                  <tr>
                                      <td> {project_data.project_id} </td>
                                      <td> {project_data.project_code} </td>
                                      <td> {project_data.description} </td>
                                      <td> {project_data.start_date} </td>
                                      <td> {project_data.end_date} </td>
                                      <td> {project_data.company_name} </td>
                                      <td> {project_data.status} </td>
                                      </tr>
                              )
                          })}
                      </tbody>
                  </table>
            
              </div>
              );
                      }
                      else{
                          return (
                          <div>
                              <h6> wait</h6>
                          </div>
                      )};
                          }