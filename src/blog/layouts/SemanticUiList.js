import React from 'react'
import { List } from 'semantic-ui-react';
import Messages from '../components/Messages'

const SemanticUiList = ({ posts }) => {
    return (
        <>
            {
                posts.length ? <List divided relaxed>
                    {
                        posts.map(post => {
                            return <List.Item>
                                <List.Icon name='github' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <List.Header as='a'>{post.title}</List.Header>
                                    <List.Description as='a'>{post.date}</List.Description>
                                </List.Content>
                            </List.Item>
                        })

                    }
                </List> : <Messages text="No Posts" />
            }


        </>
    )
}

export default SemanticUiList;