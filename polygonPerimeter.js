const solution = matrix => 
    matrix.reduce( (acc,ele,idx, arr) => 
        acc += ele.reduce( (accum,elem,indx, arra) => 
            accum = elem === true ? (
    idx === 0 ? (
        indx === 0 ? (
            arra[indx+1] === false ? (
                arr[idx+1][indx] === false ? (accum + 4) : (accum + 3)
            ) : (
                arr[idx+1][indx] === false ? (accum + 3) : (accum + 2)
            )
        ) : (
            indx === arra.length - 1 ? (
                arra[indx-1] === false ? (
                    arr[idx+1][indx] === false ? (accum + 4) : (accum + 3)
                ) : (
                    arr[idx+1][indx] === false ? (accum + 3) : (accum + 2)
                )
            ) : (
                arra[indx-1] === false ? (
                    arra[indx+1] === false ? (
                        arr[idx+1][indx] === false ? (accum + 4) : (accum + 3)
                    ) : (
                        arr[idx+1][indx] === false ? (accum + 3) : (accum + 2)
                    )
                ) : (
                    arra[indx+1] === false ? (
                        arr[idx+1][indx] === false ? (accum + 3) : (accum + 2)
                    ) : (
                        arr[idx+1][indx] === false ? (accum + 2) : (accum + 1)
                    )
                )
            )
        )
    ) : (
        idx === arr.length - 1 ? (
            indx === 0 ? (
                arra[indx+1] === false ? (
                    arr[idx-1][indx] === false ? (accum + 4) : (accum + 3)
                ) : (
                    arr[idx-1][indx] === false ? (accum + 3) : (accum + 2)
                )
            ) : (
                indx === arra.length - 1 ? (
                    arra[indx - 1] === false ? (
                        arr[idx-1][indx] === false ? (accum + 4) : (accum + 3)
                    ) : (
                        arr[idx-1][indx] === false ? (accum + 3) : (accum + 2)
                    )
                ) : (
                    arr[idx-1][indx] === false ? (
                        arra[indx-1] === false ? (
                            arra[indx+1] === false ? (accum + 4) : (accum + 3)
                        ) : (
                            arra[indx+1] === false ? (accum + 3) : (accum + 2)
                        )
                    ) : (
                        arra[indx-1] === false ? (
                            arra[indx+1] === false ? (accum + 3) : (accum + 2)
                        ) : (
                            arra[indx+1] === false ? (accum + 2) : (accum + 1)
                        )
                    )
                )
            )
        ) : (
            indx === 0 ? (
                arra[indx+1] === false ? (
                    arr[idx-1][indx] === false ? (
                        arr[idx+1][indx] === false ? (accum + 4) : (accum + 3)
                    ) : (
                        arr[idx-1][indx] === false ? (accum + 3) : (accum + 2)
                    )
                ) : (
                    arr[idx-1][indx] === false ? (
                        arr[idx+1][indx] === false ? (accum + 3) : (accum + 2)
                    ) : (
                        arr[idx+1][indx] === false ? (accum + 2) : (accum + 1)
                    )
                )
            ) : (
                indx === arra.length - 1 ? (
                    arra[indx-1] === false ? (
                        arr[idx-1][indx] === false ? (
                            arr[idx+1][indx] === false ? (accum + 4) : (accum + 3)
                        ) : (
                            arr[idx+1][indx] === false ? (accum + 3) : (accum + 2)
                        )
                    ) : (
                        arr[idx-1][indx] === false ? (
                            arr[idx+1][indx] === false ? (accum + 3) : (accum + 2)
                        ) : (
                            arr[idx+1][indx] === false ? (accum + 2) : (accum + 1)
                        )
                    )
                ) : (
                    arr[idx-1][indx] === false ? (
                        arr[idx+1][indx] === false ? (
                            arra[indx-1] === false ? (
                                arra[indx+1] === false ? (accum + 4) : (accum + 3)
                            ) : (
                                arra[indx+1] === false ? (accum + 3) : (accum + 2)
                            )
                        ) : (
                            arra[indx-1] === false ? (
                                arra[indx+1] === false ? (accum + 3) : (accum + 2)
                            ) : (
                                arra[indx+1] === false ? (accum + 2) : (accum + 1)
                            )
                        )
                    ) : (
                        arr[idx+1][indx] === false ? (
                            arra[indx-1] === false ? (
                                arra[indx+1] === false ? (accum + 3) : (accum + 2)
                            ) : (
                                arra[indx+1] === false ? (accum + 2) : (accum + 1)
                            )
                        ) : (
                            arra[indx+1] === false ? (
                                arra[indx-1] === false ? (accum + 2) : (accum + 1)
                            ) : (
                                arra[indx-1] === false ? (accum + 1) : (accum)
                            )
                        )
                    )
                ) 
            )
        )
    )
) : (accum),0),0)
