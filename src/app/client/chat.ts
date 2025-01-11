/**
 * Copyright 2025 Yuki Fujisawa - wywy.jp
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { PostSlackChatMessageService } from '../service/post-slack-chat-message-service';
import { ChatPostMessageArguments } from '../types/chat-post-message-arguments';
import { SlackApiResponse } from '../types/slack-api-response';

export class Chat {
  constructor(private readonly token: string) {}

  postMessage(messageArguments: ChatPostMessageArguments): SlackApiResponse {
    return PostSlackChatMessageService.call(this.token, messageArguments);
  }
}